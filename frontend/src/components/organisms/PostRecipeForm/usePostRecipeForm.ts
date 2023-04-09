import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { MultiValue, SingleValue } from 'react-select';

import {
  COOK_COST_OPTIONS,
  COOK_TIME_OPTIONS,
} from '@/common/constants/options';
import { HOME } from '@/common/constants/path';
// import { ImageInfo } from '@/common/types';
import { validateRecipeParams } from '@/common/validations/postRecipe';
import { useGlobalLoading } from '@/features/globalLoading/useGlobalLoading';
import { usePostRecipe } from '@/features/postRecipe/usePostRecipe';
import { useReadFile } from '@/hooks/useReadFile';
import postRecipe from '@/services/recipes/postRecipe';
import { isEmptyArray } from '@/utils/match';
import { success } from '@/utils/notifications';
import { safeParseInt } from '@/utils/parse';
import { handleResponseError } from '@/utils/requestError';

export type PostIngredient = {
  ingredient_name: string;
  quantity: string;
};

export type PostRecipeStep = {
  description: string;
  // HACK: KOU-146 Stepの画像を投稿できるように修正する。
  // step_image?: ImageInfo;
};

type AttachedType = File | null;

export type CategoryOption = {
  value: string;
  label: string;
};

export type FileObject = {
  file: AttachedType;
  url: string;
  filename: string;
  dataUrl: string;
};

export const usePostRecipeForm = () => {
  const router = useRouter();
  const { setIsLoading } = useGlobalLoading();
  const {
    recipeParams,
    registerRecipeInfo,
    resetRegisteredRecipeInfo,
    registerIngredients,
    registerAdditionalIngredient,
    registerRemovedIngredient,
    registerSteps,
    registerAdditionalStep,
    registerRemovedStep,
    resetMainImage,
  } = usePostRecipe();

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [selectedCostIndex, setSelectedCostIndex] = useState<number>(0);
  const [selectedCookingTimeIndex, setSelectedCookingTimeIndex] =
    useState<number>(0);
  const [mainImage, setMainImage] = useState<AttachedType>(null);

  const { imageParams, previewImageUrl } = useReadFile({
    file: mainImage,
  });

  const [selectedCategory, setSelectedCategory] = useState<
    SingleValue<CategoryOption> | MultiValue<CategoryOption> | null
  >(null);

  const handleChangeCategory = useCallback(
    (newValue: SingleValue<CategoryOption> | MultiValue<CategoryOption>) => {
      setSelectedCategory(newValue);

      const categoryOption = newValue as CategoryOption | null;
      const value = Number(categoryOption?.value);
      registerRecipeInfo({ ...recipeParams, category_id: value });
    },
    [recipeParams, registerRecipeInfo]
  );

  const handleChangeCost = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedIndex = safeParseInt(0, e.target.value);
      setSelectedCostIndex(selectedIndex);

      const cost =
        selectedIndex > 0 ? COOK_COST_OPTIONS[selectedIndex - 1].name : '';

      registerRecipeInfo({
        ...recipeParams,
        cost,
      });
    },
    [recipeParams, registerRecipeInfo]
  );

  const handleChangeCookingTime = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedIndex = safeParseInt(0, e.target.value);
      setSelectedCookingTimeIndex(selectedIndex);

      const cookingTime =
        selectedIndex > 0 ? COOK_TIME_OPTIONS[selectedIndex - 1].name : '';

      registerRecipeInfo({
        ...recipeParams,
        cook_time: cookingTime,
      });
    },
    [recipeParams, registerRecipeInfo]
  );

  useEffect(() => {
    registerRecipeInfo({ ...recipeParams, image: imageParams });
  }, [imageParams, recipeParams, registerRecipeInfo]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget?.files && e.currentTarget.files[0]) {
        setMainImage(e.currentTarget.files[0]);
      }
    },
    []
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      const { name } = target;
      const { value } = target;

      registerRecipeInfo({ ...recipeParams, [name]: value });
    },
    [recipeParams, registerRecipeInfo]
  );

  const [stepFiles, setStepFiles] = useState<FileObject[][]>(
    Array.from(
      { length: recipeParams.recipe_steps_attributes.length },
      () => []
    )
  );

  const [stepIndex, setStepIndex] = useState<number>(0);

  // NOTE: recipeParams.recipe_steps_attributes.lengthが変化したらstepFilesを更新する
  useEffect(() => {
    setStepFiles((prevState) => {
      const newFiles = [...prevState];
      if (newFiles.length < recipeParams.recipe_steps_attributes.length) {
        const diff =
          recipeParams.recipe_steps_attributes.length - newFiles.length;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < diff; i++) {
          newFiles.push([]);
        }
      } else {
        newFiles.splice(recipeParams.recipe_steps_attributes.length);
      }
      return newFiles;
    });
  }, [recipeParams.recipe_steps_attributes.length]);

  const handleStepInputChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
      field: keyof PostRecipeStep
    ) => {
      setStepIndex(index);
      // HACK: KOU-146 Stepの画像を投稿できるように修正する。
      // const fileList = e.target.files;
      // if (fileList && field === 'step_image') {
      //   Array.from(fileList).forEach((file) => {
      //     const url = URL.createObjectURL(file);
      //     const filename = file.name;
      //     const reader = new FileReader();
      //     reader.readAsDataURL(file);
      //     reader.onload = () => {
      //       const dataUrl = reader.result as string;
      //       setStepFiles((prevState) => {
      //         const newFiles = [...prevState];
      //         newFiles[index] = [
      //           ...newFiles[index],
      //           { file, url, filename, dataUrl },
      //         ];
      //         return newFiles;
      //       });
      //     };
      //   });
      // }

      registerSteps({
        index,
        description: field === 'description' ? e.target.value : undefined,
      });
    },
    [registerSteps]
  );

  useEffect(() => {
    if (stepFiles[stepIndex]) {
      const stepFileName = stepFiles[stepIndex].length
        ? stepFiles[stepIndex][0].filename
        : '';
      const stepDataUrl = stepFiles[stepIndex].length
        ? stepFiles[stepIndex][0].dataUrl
        : null;

      registerSteps({
        index: stepIndex,
        image: { filename: stepFileName, io: stepDataUrl },
      });
    }
  }, [registerSteps, stepFiles, stepIndex]);

  const handleClickRemoveStep = (index: number) => {
    // stepFilesから該当する要素を削除
    setStepFiles((prevState) => {
      const newFiles = [...prevState];
      newFiles.splice(index, 1);
      return newFiles;
    });

    registerRemovedStep({ index });
  };

  const handleIngredientNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { target } = e;
      const { value } = target;

      registerIngredients({
        index,
        ingredient_name: value,
      });
    },
    [registerIngredients]
  );

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { target } = e;
      const { value } = target;

      registerIngredients({
        index,
        quantity: value,
      });
    },
    [registerIngredients]
  );

  const handleClickAddIngredient = () => {
    registerAdditionalIngredient();
  };

  const handleClickRemoveIngredient = (index: number) => {
    registerRemovedIngredient({ index });
  };

  const handleClickAddStep = () => {
    registerAdditionalStep();
  };

  const handleResetMainImage = () => {
    setMainImage(null);
    resetMainImage();
  };

  // HACK: KOU-146 Stepの画像を投稿できるように修正する。
  // const handleResetStepImage = (index: number) => {
  //   setStepFiles((prevState) => {
  //     const newFiles = [...prevState];
  //     newFiles[index] = [];
  //     return newFiles;
  //   });
  //   resetStepImage({ index });
  // };

  const checkCanRequest = useCallback((errors: string[]): boolean => {
    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
      return false;
    }
    return true;
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateRecipeParams({ recipeParams });
      // NOTE: エラーメッセージをページ上部に出力するためスクロールトップさせる。
      if (!checkCanRequest(errors)) {
        window.scroll({ top: 0 });
        return;
      }

      setIsLoading(true);
      try {
        const data = await postRecipe(recipeParams);
        if (data.status === 'created') {
          success('レシピを投稿しました!!');
          router.push(HOME);
        }
      } catch {
        handleResponseError('レシピ投稿失敗');
      } finally {
        resetRegisteredRecipeInfo();
        setIsLoading(false);
      }
    },
    [
      checkCanRequest,
      recipeParams,
      resetRegisteredRecipeInfo,
      router,
      setIsLoading,
    ]
  );

  return {
    handleSubmit,
    handleIngredientNameChange,
    handleQuantityChange,
    handleInputChange,
    handleStepInputChange,
    handleFileChange,
    handleChangeCost,
    handleChangeCookingTime,
    handleClickAddIngredient,
    handleClickAddStep,
    handleClickRemoveIngredient,
    handleClickRemoveStep,
    setStepFiles,
    handleResetMainImage,
    handleChangeCategory,
    // handleResetStepImage,
    selectedCostIndex,
    selectedCookingTimeIndex,
    recipeParams,
    previewImageUrl,
    mainImage,
    stepFiles,
    formErrors,
    selectedCategory,
  };
};

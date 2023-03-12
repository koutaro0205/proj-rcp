import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  COOK_COST_OPTIONS,
  COOK_TIME_OPTIONS,
} from '@/common/constants/options';
import { AppDispatch } from '@/common/store';
import { validateRecipeParams } from '@/common/validations/postRecipe';
import { selectRgisteredRecipeInfo } from '@/features/postRecipe/selectors';
import {
  registerSteps,
  registerRecipeInfo,
  registerIngredients,
  registerAdditionalIngredient,
  registerAdditionalStep,
  registerRemovedIngredient,
  registerRemovedStep,
  resetMainImage,
  resetStepImage,
} from '@/features/postRecipe/slice';
import { useReadFile } from '@/hooks/useReadFile';
import postRecipe from '@/services/recipes/postRecipe';
import { isEmptyArray } from '@/utils/match';
import { safeParseInt } from '@/utils/parse';

export type Ingredient = {
  ingredient_name: string;
  quantity: string;
};

export type RecipeStep = {
  description: string;
  step_image?: {
    data: string | ArrayBuffer | null;
    filename: string;
  };
};

type AttachedType = File | null;

export type FileObject = {
  file: AttachedType;
  url: string;
  filename: string;
  dataUrl: string;
};

export const usePostRecipeForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipeParams = useSelector(selectRgisteredRecipeInfo);

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [selectedCostIndex, setSelectedCostIndex] = useState<number>(0);
  const [selectedCookingTimeIndex, setSelectedCookingTimeIndex] =
    useState<number>(0);
  const [mainImage, setMainImage] = useState<AttachedType>(null);

  const { imageParams, previewImageUrl } = useReadFile({
    file: mainImage,
  });

  const handleChangeCost = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedIndex = safeParseInt(0, e.target.value);
      setSelectedCostIndex(selectedIndex);

      const cost =
        selectedIndex > 0 ? COOK_COST_OPTIONS[selectedIndex - 1].name : '';

      dispatch(
        registerRecipeInfo({
          ...recipeParams,
          cost,
        })
      );
    },
    [dispatch, recipeParams]
  );

  const handleChangeCookingTime = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedIndex = safeParseInt(0, e.target.value);
      setSelectedCookingTimeIndex(selectedIndex);

      const cookingTime =
        selectedIndex > 0 ? COOK_TIME_OPTIONS[selectedIndex - 1].name : '';

      dispatch(
        registerRecipeInfo({
          ...recipeParams,
          cook_time: cookingTime,
        })
      );
    },
    [dispatch, recipeParams]
  );

  useEffect(() => {
    dispatch(registerRecipeInfo({ ...recipeParams, image: imageParams }));
  }, [dispatch, imageParams, recipeParams]);

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

      dispatch(registerRecipeInfo({ ...recipeParams, [name]: value }));
    },
    [dispatch, recipeParams]
  );

  const [stepFiles, setStepFiles] = useState<FileObject[][]>(
    Array.from(
      { length: recipeParams.recipe_steps_attributes.length },
      () => []
    )
  );

  const [stepIndex, setStepIndex] = useState<number>(0);

  // recipeParams.recipe_steps_attributes.lengthが変化したらstepFilesを更新する
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
      field: keyof RecipeStep
    ) => {
      setStepIndex(index);
      const fileList = e.target.files;
      if (fileList && field === 'step_image') {
        Array.from(fileList).forEach((file) => {
          const url = URL.createObjectURL(file);
          const filename = file.name;
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const dataUrl = reader.result as string;
            setStepFiles((prevState) => {
              const newFiles = [...prevState];
              newFiles[index] = [
                ...newFiles[index],
                { file, url, filename, dataUrl },
              ];
              return newFiles;
            });
          };
        });
      }

      dispatch(
        registerSteps({
          index,
          description: field === 'description' ? e.target.value : undefined,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (stepFiles[stepIndex]) {
      const stepFileName = stepFiles[stepIndex].length
        ? stepFiles[stepIndex][0].filename
        : '';
      const stepDataUrl = stepFiles[stepIndex].length
        ? stepFiles[stepIndex][0].dataUrl
        : null;

      dispatch(
        registerSteps({
          index: stepIndex,
          image: { filename: stepFileName, data: stepDataUrl },
        })
      );
    }
  }, [dispatch, stepFiles, stepIndex]);

  const handleClickRemoveStep = (index: number) => {
    // stepFilesから該当する要素を削除
    setStepFiles((prevState) => {
      const newFiles = [...prevState];
      newFiles.splice(index, 1);
      return newFiles;
    });

    dispatch(registerRemovedStep({ index }));
  };

  const handleIngredientNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { target } = e;
      const { value } = target;

      dispatch(
        registerIngredients({
          index,
          ingredient_name: value,
        })
      );
    },
    [dispatch]
  );

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { target } = e;
      const { value } = target;

      dispatch(
        registerIngredients({
          index,
          quantity: value,
        })
      );
    },
    [dispatch]
  );

  const handleClickAddIngredient = () => {
    dispatch(registerAdditionalIngredient());
  };

  const handleClickRemoveIngredient = (index: number) => {
    dispatch(registerRemovedIngredient({ index }));
  };

  const handleClickAddStep = () => {
    dispatch(registerAdditionalStep());
  };

  const handleResetMainImage = () => {
    setMainImage(null);
    dispatch(resetMainImage());
  };

  const handleResetStepImage = (index: number) => {
    setStepFiles((prevState) => {
      const newFiles = [...prevState];
      newFiles[index] = [];
      return newFiles;
    });
    dispatch(resetStepImage({ index }));
  };

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
      if (!checkCanRequest(errors)) {
        // NOTE: エラーメッセージをページ上部に出力するためスクロールトップさせる。
        window.scroll({ top: 0 });
        return;
      }

      // FIXME: KOU-146 Stepの画像を投稿できるように修正する。
      const data = await postRecipe(recipeParams);
      // eslint-disable-next-line no-console
      console.log(data);
    },
    [checkCanRequest, recipeParams]
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
    handleResetStepImage,
    selectedCostIndex,
    selectedCookingTimeIndex,
    recipeParams,
    previewImageUrl,
    mainImage,
    stepFiles,
    formErrors,
  };
};

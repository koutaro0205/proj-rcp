import React, { useMemo } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { POSTED_RECIPE_INFO } from '@/common/constants/characters';
import {
  COOK_COST_OPTIONS,
  COOK_TIME_OPTIONS,
} from '@/common/constants/options';
import { Category } from '@/common/types/data';
import InputButton from '@/components/atoms/Button/InputButton';
import Divider from '@/components/atoms/Divider';
import Inset from '@/components/layouts/Inset';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';
import AttachedImage from '@/components/molecules/AttachedImage';
import FormItem from '@/components/molecules/FormItem';
import FormLabel from '@/components/molecules/FormItem/FormLabel';
import IngredientFormList from '@/components/molecules/IngredientFormList';
import RecipeStepList from '@/components/molecules/RecipeStepList';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import { usePostRecipeForm, CategoryOption } from './usePostRecipeForm';

type Props = {
  categories: Category[];
};

const PostRecipeForm: React.FC<Props> = ({ categories }) => {
  // NOTE: local Hooksに渡す方が手間なので、catetoriesだけはコンポーネントに直接定義
  const categoryList: CategoryOption[] = useMemo(() => {
    return categories.map((category) => {
      return { value: `${category.id}`, label: category.name };
    });
  }, [categories]);

  const {
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
    // HACK: KOU-146 Stepの画像を投稿できるように修正する。
    // handleResetStepImage,
    // stepFiles,
    selectedCostIndex,
    selectedCookingTimeIndex,
    recipeParams,
    previewImageUrl,
    mainImage,
    formErrors,
    selectedCategory,
  } = usePostRecipeForm();

  const animatedComponents = makeAnimated();
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <RenderErrors formErrors={formErrors} />

      <FormItem
        label="レシピタイトル"
        type="text"
        id="title"
        name="title"
        placeholder="【絶品】こだわりナポリタン"
        onChange={handleInputChange}
        isRequired
        value={recipeParams.title}
        isDisplayRemainingCount
        maxValueLength={POSTED_RECIPE_INFO.title}
      />
      <Stack size="l" />
      <div className={styles.recipeInformationSection}>
        <div className={styles.attachedImageWrapper}>
          <AttachedImage
            onChangeFileInput={handleFileChange}
            onClickResetImage={handleResetMainImage}
            size="mainSize"
            imageUrl={previewImageUrl}
            file={mainImage}
            inputId="mainImage"
          />
        </div>
        <Queue size="l" />
        <div className={styles.selectorsWrapper}>
          <FormItem
            isRequired
            label="調理時間"
            fieldType="selector"
            options={COOK_TIME_OPTIONS}
            onChangeOption={handleChangeCookingTime}
            selectedOptionIndex={selectedCookingTimeIndex}
            name="cook_time"
          />
          <Stack size="ml" />
          <FormItem
            label="費用"
            fieldType="selector"
            name="cost"
            options={COOK_COST_OPTIONS}
            onChangeOption={handleChangeCost}
            selectedOptionIndex={selectedCostIndex}
          />
        </div>
      </div>
      <Stack size="l" />
      <FormItem
        isRequired
        fieldType="textarea"
        label="概要・説明"
        type="text"
        id="description"
        name="description"
        onChange={handleInputChange}
        value={recipeParams.description}
        isDisplayRemainingCount
        maxValueLength={POSTED_RECIPE_INFO.description}
      />
      <Inset vertical="xl">
        <Divider pattern="horizontal" />
      </Inset>
      <div className={styles.servingsInput}>
        <FormItem
          isRequired
          fieldWidth="s"
          label="材料"
          type="number"
          id="serving_size"
          name="serving_size"
          onChange={handleInputChange}
          value={`${recipeParams.serving_size}`}
        />
        <Queue size="s" />
        <span className={styles.unitText}>人分</span>
      </div>
      <Stack size="l" />
      <IngredientFormList
        inputId="recipe_ingredients_attributes"
        inputName="recipe_ingredients_attributes"
        ingredieints={recipeParams.recipe_ingredients_attributes}
        onClickAddIngredient={handleClickAddIngredient}
        onClickRemoveIngredient={handleClickRemoveIngredient}
        onChangeName={handleIngredientNameChange}
        onChangeQuantity={handleQuantityChange}
      />
      <Inset vertical="xl">
        <Divider pattern="horizontal" />
      </Inset>
      <RecipeStepList
        inputId="recipe_steps_attributes"
        inputName="recipe_steps_attributes"
        recipeSteps={recipeParams.recipe_steps_attributes}
        onClickAddStep={handleClickAddStep}
        onClickRemoveStep={handleClickRemoveStep}
        onStepInputChange={handleStepInputChange}
        sortStepFiles={setStepFiles}
        // HACK: KOU-146 Stepの画像を投稿できるように修正する。
        // onClickResetImage={handleResetStepImage}
        // stepFiles={stepFiles}
      />
      <Stack size="l" />
      <FormItem
        fieldType="textarea"
        label="うまくできるコツ"
        type="text"
        id="tip"
        name="tip"
        onChange={handleInputChange}
        value={recipeParams.tip}
        isDisplayRemainingCount
        maxValueLength={POSTED_RECIPE_INFO.tip}
      />
      <Stack size="l" />
      <FormLabel htmlFor="category_id" isRequired>
        カテゴリ
      </FormLabel>
      <Stack size="xs" />
      <Select
        name="category_id"
        id="category_id"
        defaultValue={selectedCategory}
        options={categoryList}
        placeholder="カテゴリを選択"
        components={animatedComponents}
        onChange={handleChangeCategory}
      />
      <Inset vertical="xl">
        <Divider pattern="horizontal" />
      </Inset>
      <InputButton value="レシピを投稿する" type="submit" isCenter />
      <Stack size="l" />
    </form>
  );
};

export default PostRecipeForm;

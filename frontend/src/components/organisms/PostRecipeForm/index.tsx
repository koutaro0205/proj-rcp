import React from 'react';

import { POSTED_RECIPE_INFO } from '@/common/constants/characters';
import {
  COOKING_COST_OPTIONS,
  COOKING_TIME_OPTIONS,
} from '@/common/constants/options';
import InputButton from '@/components/atoms/Button/InputButton';
import Divider from '@/components/atoms/Divider';
import Inset from '@/components/layouts/Inset';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';
import AttachedImage from '@/components/molecules/AttachedImage';
import FormItem from '@/components/molecules/FormItem';
import IngredientFormList from '@/components/molecules/IngredientFormList';
import RecipeStepList from '@/components/molecules/RecipeStepList';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import { usePostRecipeForm } from './usePostRecipeForm';

const PostRecipeForm: React.FC = () => {
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
    handleResetStepImage,
    selectedCostIndex,
    selectedCookingTimeIndex,
    recipeParams,
    previewImageUrl,
    mainImage,
    stepFiles,
    formErrors,
  } = usePostRecipeForm();
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
            options={COOKING_TIME_OPTIONS}
            onChangeOption={handleChangeCookingTime}
            selectedOptionIndex={selectedCookingTimeIndex}
            name="cooking_time"
          />
          <Stack size="ml" />
          <FormItem
            label="費用"
            fieldType="selector"
            name="cost"
            options={COOKING_COST_OPTIONS}
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
        onClickResetImage={handleResetStepImage}
        onStepInputChange={handleStepInputChange}
        sortStepFiles={setStepFiles}
        stepFiles={stepFiles}
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
      <Inset vertical="xl">
        <Divider pattern="horizontal" />
      </Inset>
      <InputButton value="レシピを投稿する" type="submit" isCenter />
      <Stack size="l" />
    </form>
  );
};

export default PostRecipeForm;

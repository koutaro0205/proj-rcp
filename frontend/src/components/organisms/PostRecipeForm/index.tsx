import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Divider from '@/components/atoms/Divider';
import Inset from '@/components/layouts/Inset';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';
import AttachedImage from '@/components/molecules/AttachedImage';
import FormItem from '@/components/molecules/FormItem';
import IngredientFormList from '@/components/molecules/IngredientFormList';
import RecipeStepList from '@/components/molecules/RecipeStepList';

import styles from './styles';

const PostRecipeForm: React.FC = () => {
  return (
    <form className={styles.container}>
      <FormItem
        label="レシピタイトル"
        type="text"
        id="title"
        name="title"
        onChange={() => {}}
        isRequired
        // value={recipeInfo.name}
      />
      <Stack size="l" />
      <div className={styles.recipeInformationSection}>
        <div className={styles.attachedImageWrapper}>
          <AttachedImage size="mainSize" />
        </div>
        <Queue size="l" />
        <div className={styles.selectorsWrapper}>
          <FormItem
            isRequired
            label="調理時間"
            fieldType="selector"
            options={[
              { id: 1, name: '野菜' },
              { id: 2, name: '肉' },
              { id: 3, name: '乳製品' },
            ]}
            onOptionChange={() => {}}
            selectedOption={0}
          />
          <Stack size="ml" />
          <FormItem
            label="費用"
            fieldType="selector"
            options={[
              { id: 1, name: '100円' },
              { id: 2, name: '500円' },
              { id: 3, name: '1000円' },
            ]}
            onOptionChange={() => {}}
            selectedOption={0}
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
        onChange={() => {}}
        // value={recipeInfo.name}
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
          id="ingredient"
          name="ingredient"
          onChange={() => {}}
          // value={recipeInfo.name}
        />
        <Queue size="s" />
        <span className={styles.unitText}>人分</span>
      </div>
      <Stack size="l" />
      <IngredientFormList
        inputId=""
        inputName=""
        ingredieints={[
          { id: '材料1', ingredient: '作り方1', quantity: '分量' },
          { id: '材料2', ingredient: '作り方1', quantity: '分量' },
          { id: '材料3', ingredient: '作り方1', quantity: '分量' },
        ]}
        onClickAddIngredient={() => {}}
        onClickRemoveIngredient={() => {}}
        onChange={() => {}}
      />
      <Inset vertical="xl">
        <Divider pattern="horizontal" />
      </Inset>
      <RecipeStepList
        inputId=""
        inputName=""
        recipeSteps={[
          { id: 'step1', body: '作り方1' },
          { id: 'step2', body: '作り方1' },
          { id: 'step3', body: '作り方1' },
        ]}
        onClickAddStep={() => {}}
        onClickRemoveStep={() => {}}
        onChange={() => {}}
      />
      <Stack size="l" />
      <FormItem
        fieldType="textarea"
        label="うまくできるコツ"
        type="text"
        id="tips"
        name="tips"
        onChange={() => {}}
        // value={recipeInfo.name}
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

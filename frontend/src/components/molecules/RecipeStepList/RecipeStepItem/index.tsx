import React from 'react';

import { POSTED_RECIPE_INFO } from '@/common/constants/characters';
import Icon from '@/components/atoms/Icon';
import SortableIcon from '@/components/atoms/SortableIcon';
import Text from '@/components/atoms/Text';
import { Queue } from '@/components/layouts/Queue';
import AttachedStepImage from '@/components/molecules/AttachedImage/AttachedStepImage';
import FormItem from '@/components/molecules/FormItem';
import { PostRecipeStep } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

import { getStyles } from './styles';

type Props = {
  inputId: string;
  inputName: string;
  orderIndex: number;
  dragIndex: number | null;
  imageUrl: string;
  inputValue: PostRecipeStep;
  file: File | null;
  onChangeStepInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof PostRecipeStep
  ) => void;
  onClickRemoveStep: (orderIndex: number) => void;
  onClickResetImage: (index: number) => void;
  onDragStart: (orderIndex: number) => void;
  onDragEnter: (orderIndex: number) => void;
  onDragEnd: () => void;
};

const RecipeStepItem: React.FC<Props> = ({
  inputId,
  inputName,
  orderIndex,
  dragIndex,
  imageUrl,
  file,
  inputValue,
  onClickRemoveStep,
  onClickResetImage,
  onChangeStepInput,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const isDragging = dragIndex === orderIndex;
  const styles = getStyles(isDragging);
  return (
    <div
      className={styles.container}
      draggable
      onDragStart={() => onDragStart(orderIndex)}
      onDragEnter={() => onDragEnter(orderIndex)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={onDragEnd}
    >
      <div className={styles.sortableIconWrapper}>
        <SortableIcon />
      </div>
      <div>
        <Text weight="bold">{orderIndex + 1}</Text>
      </div>
      <Queue size="m" />
      <div className={styles.content}>
        <FormItem
          id={inputId}
          name={inputName}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeStepInput(e, orderIndex, 'description')
          }
          fieldType="textarea"
          placeholder="例) 野菜を洗った後、一口大にカットしてフライパンで炒める。"
          value={inputValue?.description}
          maxValueLength={POSTED_RECIPE_INFO.step.description}
          isDisplayRemainingCount
        />
        <Queue size="m" />
        <div className={styles.attachedImageWrapper}>
          <AttachedStepImage
            index={orderIndex}
            size="subSize"
            onChangeStepInput={onChangeStepInput}
            onClickResetImage={onClickResetImage}
            imageUrl={imageUrl}
            file={file}
          />
        </div>
      </div>
      <Queue size="m" />
      <div className={styles.iconContainer}>
        <Icon
          name="TRASH"
          size="xs"
          onClick={() => onClickRemoveStep(orderIndex)}
        />
      </div>
    </div>
  );
};

export default RecipeStepItem;

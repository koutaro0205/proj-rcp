import React from 'react';

import Icon from '@/components/atoms/Icon';
import SortableIcon from '@/components/atoms/SortableIcon';
import Text from '@/components/atoms/Text';
import { Queue } from '@/components/layouts/Queue';
import AttachedImage from '@/components/molecules/AttachedImage';
import FormItem from '@/components/molecules/FormItem';

import { getStyles } from './styles';

type Props = {
  inputId: string;
  inputName: string;
  orderIndex: number;
  dragIndex: number | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickRemoveStep: () => void;
  onDragStart: (orderIndex: number) => void;
  onDragEnter: (orderIndex: number) => void;
  onDragEnd: () => void;
};

const RecipeStepItem: React.FC<Props> = ({
  inputId,
  inputName,
  orderIndex,
  dragIndex,
  onClickRemoveStep,
  onChange,
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
          onChange={onChange}
          fieldType="textarea"
          placeholder="例) 野菜を洗った後、一口大にカットしてフライパンで炒める。"
        />
        <Queue size="m" />
        <div className={styles.attachedImageWrapper}>
          <AttachedImage size="subSize" />
        </div>
      </div>
      <Queue size="m" />
      <div className={styles.iconContainer}>
        <Icon name="trash" size={16} onClick={onClickRemoveStep} />
      </div>
    </div>
  );
};

export default RecipeStepItem;

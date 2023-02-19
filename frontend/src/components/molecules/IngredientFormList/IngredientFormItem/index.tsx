import React from 'react';

import Icon from '@/components/atoms/Icon';
import SortableIcon from '@/components/atoms/SortableIcon';
import { Queue } from '@/components/layouts/Queue';
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
  onClickRemoveIngredient: () => void;
  onDragStart: (orderIndex: number) => void;
  onDragEnter: (orderIndex: number) => void;
  onDragEnd: () => void;
};

const IngredientFormItem: React.FC<Props> = ({
  inputId,
  inputName,
  orderIndex,
  dragIndex,
  onClickRemoveIngredient,
  onChange,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const styles = getStyles(dragIndex === orderIndex);
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
      <Queue size="m" />
      <div className={styles.content}>
        <FormItem
          id={inputId}
          name={inputName}
          type="text"
          onChange={onChange}
          fieldType="textField"
          placeholder="例) 玉ねぎ"
        />
        <Queue size="m" />
        <FormItem
          id={inputId}
          name={inputName}
          type="text"
          onChange={onChange}
          fieldType="textField"
          placeholder="例) 半切れ"
        />
      </div>
      <Queue size="m" />
      <div className={styles.iconContainer}>
        <Icon name="trash" size={16} onClick={onClickRemoveIngredient} />
      </div>
    </div>
  );
};

export default IngredientFormItem;

import Image from 'next/image';
import React, { useMemo } from 'react';

import BasicButton from '@/components/atoms/Button/BasicButton';
import Icon from '@/components/atoms/Icon';
import Loading from '@/components/atoms/Loading';
import { Stack } from '@/components/layouts/Stack';
import {
  getStyles,
  ATTACHED_IMAGE_SIZE,
  AttachedImageSize,
} from '@/components/molecules/AttachedImage/styles';
import { PostRecipeStep } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

type Props = {
  size?: AttachedImageSize;
  index: number;
  onChangeStepInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof PostRecipeStep
  ) => void;
  onClickResetImage: (index: number) => void;
  imageUrl: string;
  file: File | null;
};

// FIXME: コンポーネントを修正する。
const AttachedStepImage: React.FC<Props> = ({
  size = 'freeSize',
  index,
  onChangeStepInput,
  onClickResetImage,
  imageUrl,
  file,
}) => {
  const styles = getStyles(size);

  const isLoading = useMemo(() => {
    return file && !imageUrl;
  }, [file, imageUrl]);

  const inputId = `step${index + 1}`;

  return (
    <div className={styles.container}>
      {file ? (
        <div>
          {isLoading ? (
            <Loading size="s" />
          ) : (
            <div key={`${file.name}-[${index + 1}]`}>
              <Image
                src={imageUrl}
                width={ATTACHED_IMAGE_SIZE[size]}
                height={ATTACHED_IMAGE_SIZE[size]}
                className={styles.image}
              />
              <div className={styles.buttonWrapper}>
                <BasicButton
                  label="削除"
                  isTransparent
                  isCircle
                  color="white"
                  backgroundColor="black"
                  fontSize="s"
                  // FIXME: 処理を追加する。
                  onClick={() => onClickResetImage(index)}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.input}>
          <label htmlFor={inputId} className={styles.inputContainer}>
            {/* ダミーインプット */}
            <input
              id={inputId}
              hidden
              type="file"
              name={`recipe[recipe_steps_attributes][${index}][step_image]`}
              accept="image/*"
              multiple
              onChange={(e) => onChangeStepInput(e, index, 'step_image')}
            />
            <div className={styles.inputContent}>
              <Icon name="CAMERA" size="s" />
              <Stack size="xs" />
              <div>写真を投稿</div>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default AttachedStepImage;

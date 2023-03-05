import Image from 'next/image';
import React, { useMemo } from 'react';

import BasicButton from '@/components/atoms/Button/BasicButton';
import Icon from '@/components/atoms/Icon';
import Loading from '@/components/atoms/Loading';
import Inset from '@/components/layouts/Inset';

import { getStyles, ATTACHED_IMAGE_SIZE, AttachedImageSize } from './styles';

type Props = {
  size?: AttachedImageSize;
  inputId: string;
  onChangeFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickResetImage: () => void;
  imageUrl: string;
  file: File | null;
};

// FIXME: コンポーネントを修正する。
const AttachedImage: React.FC<Props> = ({
  size = 'freeSize',
  onChangeFileInput,
  onClickResetImage,
  imageUrl,
  inputId,
  file,
}) => {
  const styles = getStyles(size);

  const isLoading = useMemo(() => {
    return file && !imageUrl;
  }, [file, imageUrl]);

  return (
    <div className={styles.container}>
      {file ? (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
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
                  onClick={onClickResetImage}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Inset all="xs">
          <label htmlFor={inputId} className={styles.inputContainer}>
            {/* ダミーインプット */}
            <input
              id={inputId}
              hidden
              type="file"
              accept="image/*"
              onChange={onChangeFileInput}
            />
            <div className={styles.inputContent}>
              <Icon name="CAMERA" size="m" />
              <div>写真を載せる</div>
            </div>
          </label>
        </Inset>
      )}
    </div>
  );
};

export default AttachedImage;

import Image from 'next/image';
import React from 'react';

import BasicButton from '@/components/atoms/Button/BasicButton';
import Icon from '@/components/atoms/Icon';
import Loading from '@/components/atoms/Loading';
import Inset from '@/components/layouts/Inset';

import { getStyles, ATTACHED_IMAGE_SIZE, AttachedImageSize } from './styles';
import { useAttachedImage } from './useAttachedImage';

type Props = {
  size?: AttachedImageSize;
};

// FIXME: コンポーネントを修正する。
const AttachedImage: React.FC<Props> = ({ size = 'freeSize' }) => {
  const {
    inputRef,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    imageInfo, // FIXME: 画像を格納するStoreを作成する。
    imageUrl,
    isLoading,
    file,
    handleFileChange,
    handleResetFile,
    handleClick,
  } = useAttachedImage();
  const styles = getStyles(size);

  // Storeに格納する。
  // メインイメージはメインに格納
  // ex1.) dispatch(attachMainImage(imageInfo))

  // それ以外は配列に格納
  // ex2.) dispatch(attachSubImages([imageInfo1, imageIngo2, ...]))

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
                  onClick={handleResetFile}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Inset all="xs">
          <div
            role="presentation"
            className={styles.inputContainer}
            onClick={handleClick}
          >
            {/* ダミーインプット */}
            <input
              ref={inputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <div className={styles.inputContent}>
              <Icon name="camera" size={32} />
              <div>写真を載せる</div>
            </div>
          </div>
        </Inset>
      )}
    </div>
  );
};

export default AttachedImage;

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import DeleteButton from '@/components/atoms/Button/DeleteButton';
import InputButton from '@/components/atoms/Button/InputButton';
import Loading from '@/components/atoms/Loading';
import { selectCurrentUser } from '@/features/currentUser/selecters';

import styles from './styles';

type Props = {
  uploadButtonLabel: string;
  imageUrl: string;
  file: File | null;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickResetFile: () => void;
  onClickUploadFile: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const PREVIEW_IMAGE_SIZE = 100;

// FIXME: コンポーネントを分割する。
// FIXME: デフォルトのイメージパスを切り出す。
const InputImage: React.FC<Props> = ({
  uploadButtonLabel,
  imageUrl,
  file,
  inputRef,
  onChange,
  onClickResetFile,
  onClickUploadFile,
}) => {
  const isLoading = useMemo(() => {
    return file && !imageUrl;
  }, [file, imageUrl]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {file ? (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <Image
                src={imageUrl}
                width={PREVIEW_IMAGE_SIZE}
                height={PREVIEW_IMAGE_SIZE}
                className={styles.image}
              />
            )}
            <div className={styles.deleteButtonWrapper}>
              <DeleteButton label="削除" onClick={onClickResetFile} />
            </div>
          </>
        ) : (
          <Image
            src={
              currentUser?.image_url
                ? currentUser?.image_url
                : '/images/default.jpg'
            }
            width={PREVIEW_IMAGE_SIZE}
            height={PREVIEW_IMAGE_SIZE}
            className={styles.image}
          />
        )}
      </div>
      <InputButton
        type="button"
        value={uploadButtonLabel}
        onClick={onClickUploadFile}
      />
      {/* ダミーのインプット */}
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default InputImage;

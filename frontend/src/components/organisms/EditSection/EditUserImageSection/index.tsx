import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
// import RenderErrors from '@/components/molecules/RenderErrors';
import { Stack } from '@/components/layouts/Stack';
import InputImage from '@/components/molecules/InputImage';
import { CurrentUser } from '@/features/currentUser/type';
import { UserParams } from '@/services/users/types';

type Props = {
  currentUser: CurrentUser;
  userInfo: UserParams;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  // 画像投稿に使うProps群
  imageUrl: string;
  file: File | null;
  inputRef: React.RefObject<HTMLInputElement>;
  onClickResetFile: () => void;
  onClickUploadFile: (event: React.MouseEvent<HTMLInputElement>) => void;
};

// HACK: バックエンド側でユーザー画像を設定する実装が完了し次第設定する
const EditUserImageSection: React.FC<Props> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentUser,
  userInfo,
  inputRef,
  imageUrl,
  file,
  onClickResetFile,
  onClickUploadFile,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <SubTitle>プロフィール画像変更</SubTitle>
      <Explanation message="アプリ内で表示されるあなたのプロフィール画像です。自由に変更できます。" />
      <Text>現在のプロフィール画像</Text>
      <Stack size="l" />
      <form onSubmit={onSubmit}>
        {/* HACK: 画像のバリデーションが用意でき次第追加する */}
        {/* <RenderErrors formErrors={formErrors} /> */}
        <InputImage
          inputRef={inputRef}
          uploadButtonLabel="画像をアップロード"
          imageUrl={imageUrl}
          file={file}
          onChange={onChange}
          onClickResetFile={onClickResetFile}
          onClickUploadFile={onClickUploadFile}
        />
        <Stack size="xl" />
        {/* HACK: 現状画像の変更が行われることはないためdisabled */}
        <InputButton
          type="submit"
          value="プロフィール画像を変更する"
          isCenter
          disabled={!(!!userInfo.image?.data && !!userInfo.image.filename)}
        />
      </form>
    </div>
  );
};

export default EditUserImageSection;

import React from 'react';

import { User } from '@/common/types/data';
import FollowButton from '@/components/atoms/Button/FollowButton';

import { useFollowUserButton } from './useFollowUserButton';

type Props = {
  user: User;
};

// FIXME: フェッチ回数が多すぎるため、user情報にフォロー状況を持たせるようにバックエンド側を修正する。
const FollowUserButton: React.FC<Props> = ({ user }) => {
  const { isFollowing, handleClick } = useFollowUserButton({ user });
  return (
    <FollowButton
      isFollowing={isFollowing}
      onClick={handleClick}
      size="normal"
    />
  );
};

export default FollowUserButton;

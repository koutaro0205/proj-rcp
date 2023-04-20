import { useCallback, useEffect, useState } from 'react';

import { User } from '@/common/types/data';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useFollowing } from '@/hooks/useFollowing';
import { follow } from '@/services/relationships/follow';
import { getFollowingStatus } from '@/services/relationships/getFollowingStatus';
import { unFollow } from '@/services/relationships/unFollow';

type Args = {
  user: User;
};

const useProfileCard = ({ user }: Args) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const { isLoggedIn } = useCurrentUser();
  const {
    followerCount,
    followingCount,
    increaseFollowerCount,
    decreaseFollowerCount,
  } = useFollowing({ userId: user.id });

  const fetchIsFollowing = useCallback(async () => {
    const data = await getFollowingStatus(user.id);
    if (data.is_following) {
      setIsFollowing(true);
    }
  }, [user.id]);

  useEffect(() => {
    // NOTE: ログインしていない場合は、フォロー状態を取得しない。
    if (isLoggedIn) {
      fetchIsFollowing();
    }
  }, [fetchIsFollowing, isLoggedIn, user.id]);

  const handleClick = () => {
    // 既にフォロー状態の時
    if (isFollowing) {
      unFollow(user.id);
      setIsFollowing(false);
      decreaseFollowerCount();
      return;
    }
    // 未フォロー状態の時
    follow(user);
    setIsFollowing(true);
    increaseFollowerCount();
  };
  return {
    isFollowing,
    handleClick,
    followerCount,
    followingCount,
    isLoggedIn,
  };
};

export default useProfileCard;

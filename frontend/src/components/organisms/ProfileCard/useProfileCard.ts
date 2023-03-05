import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { User } from '@/common/types/data';
import { selectIsLoggedIn } from '@/features/currentUser/selectors';
import { useFollowing } from '@/hooks/useFollowing';
import { follow } from '@/services/relationships/follow';
import { getFollowingStatus } from '@/services/relationships/getFollowingStatus';
import { unFollow } from '@/services/relationships/unFollow';

type Args = {
  user: User;
};

const useProfileCard = ({ user }: Args) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
    if (isLoggedIn) {
      fetchIsFollowing();
    }
  }, [fetchIsFollowing, isLoggedIn, user.id]);

  const handleClick = () => {
    if (isFollowing) {
      unFollow(user.id);
      setIsFollowing(false);
      decreaseFollowerCount();
      return;
    }
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

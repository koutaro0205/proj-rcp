import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { User } from '@/@types/data';
import { selectIsLoggedIn } from '@/features/currentUser/selecters';
import { follow } from '@/services/relationships/follow';
import { getFollowingStatus } from '@/services/relationships/getFollowingStatus';
import { unFollow } from '@/services/relationships/unFollow';

export const useFollowUserButton = ({ user }: { user: User }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
  }, [fetchIsFollowing, isLoggedIn]);

  const handleClick = useCallback(() => {
    if (isFollowing) {
      unFollow(user.id);
      setIsFollowing(false);
      return;
    }
    follow(user);
    setIsFollowing(true);
  }, [isFollowing, user]);

  return { isFollowing, handleClick };
};
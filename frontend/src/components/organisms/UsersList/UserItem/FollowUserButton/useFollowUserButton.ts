import { useCallback, useEffect, useState } from 'react';

import { User } from '@/common/types/data';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { follow } from '@/services/relationships/follow';
import { getFollowingStatus } from '@/services/relationships/getFollowingStatus';
import { unFollow } from '@/services/relationships/unFollow';

export const useFollowUserButton = ({ user }: { user: User }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const { isLoggedIn } = useCurrentUser();

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

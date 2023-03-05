import { useCallback, useEffect, useReducer } from 'react';

import { User } from '@/common/types/data';
import { getFollowersList } from '@/services/relationships/getFollowersList';
import { getFollowingList } from '@/services/relationships/getFollowingList';

type Args = {
  userId: number;
};

type Store = {
  followingCount: number;
  followerCount: number;
  followingList: User[];
  followerList: User[];
};
type ActionType =
  | { type: 'incrementFollowerCount' }
  | { type: 'decrementFollowerCount' }
  | {
      type: 'setFollowerData';
      payload: { followerCount: number; followerList: User[] };
    }
  | {
      type: 'setFollowingData';
      payload: { followingCount: number; followingList: User[] };
    };

const INITIAL_STATE = {
  followingCount: 0,
  followerCount: 0,
  followingList: [],
  followerList: [],
};

const reducer: React.Reducer<Store, ActionType> = (state, action): Store => {
  switch (action.type) {
    case 'incrementFollowerCount':
      return {
        ...state,
        followerCount: state.followerCount + 1,
      };
    case 'decrementFollowerCount':
      return {
        ...state,
        followerCount: state.followerCount - 1,
      };
    case 'setFollowerData':
      return {
        ...state,
        followerCount: action.payload.followerCount,
        followerList: action.payload.followerList,
      };
    case 'setFollowingData':
      return {
        ...state,
        followingCount: action.payload.followingCount,
        followingList: action.payload.followingList,
      };
    default:
      return state;
  }
};

export const useFollowing = ({ userId }: Args) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchFollowingStatus = useCallback(async () => {
    const followingData = await getFollowingList(userId);
    dispatch({
      type: 'setFollowingData',
      payload: {
        followingCount: followingData.following_count,
        followingList: followingData.following_list,
      },
    });

    const followersData = await getFollowersList(userId);
    dispatch({
      type: 'setFollowerData',
      payload: {
        followerCount: followersData.followers_count,
        followerList: followersData.followers_list,
      },
    });
  }, [userId]);

  const increaseFollowerCount = useCallback(() => {
    dispatch({ type: 'incrementFollowerCount' });
  }, []);

  const decreaseFollowerCount = useCallback(() => {
    dispatch({ type: 'decrementFollowerCount' });
  }, []);

  useEffect(() => {
    fetchFollowingStatus();
  }, [fetchFollowingStatus, userId]);

  return {
    followerCount: state.followerCount,
    followingCount: state.followingCount,
    followingList: state.followingList,
    followerList: state.followerList,
    increaseFollowerCount,
    decreaseFollowerCount,
  };
};

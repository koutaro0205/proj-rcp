import { useCallback, useEffect, useReducer } from 'react';

import { Recipe } from '@/common/types/data';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { addToFavorite } from '@/services/favorites/addToFavorite';
import { getFavoriteStatus } from '@/services/favorites/getFavoriteStatus';
import { removeFromFavorite } from '@/services/favorites/removeFromFavorite';

type Args = {
  recipe: Recipe;
};

type Store = {
  favoriteCount: number;
  isFavorite: boolean;
};
type ActionType =
  | { type: 'incrementFavoriteCount' }
  | { type: 'decrementFavoriteCount' }
  | {
      type: 'updateFavorite';
      payload: { favoriteCount: number; isFavarite: boolean };
    }
  | {
      type: 'setIsFavorite';
      payload: { isFavarite: boolean };
    };

const INITIAL_STATE = {
  favoriteCount: 0,
  isFavorite: false,
};

const reducer: React.Reducer<Store, ActionType> = (state, action): Store => {
  switch (action.type) {
    case 'incrementFavoriteCount':
      return {
        ...state,
        favoriteCount: state.favoriteCount + 1,
      };
    case 'decrementFavoriteCount':
      return {
        ...state,
        favoriteCount: state.favoriteCount - 1,
      };
    case 'updateFavorite':
      return {
        isFavorite: action.payload.isFavarite,
        favoriteCount: action.payload.favoriteCount,
      };
    case 'setIsFavorite':
      return {
        ...state,
        isFavorite: action.payload.isFavarite,
      };
    default:
      return state;
  }
};

export const useFavorite = ({ recipe }: Args) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isLoggedIn } = useCurrentUser();

  const increaseFavoriteCount = useCallback(() => {
    dispatch({ type: 'incrementFavoriteCount' });
  }, []);

  const decreaseFavoriteCount = useCallback(() => {
    dispatch({ type: 'decrementFavoriteCount' });
  }, []);

  const updateFavorite = useCallback(
    (favoriteCount: number, isFavarite: boolean) => {
      dispatch({
        type: 'updateFavorite',
        payload: {
          favoriteCount,
          isFavarite,
        },
      });
    },
    []
  );

  const setIsFavorite = useCallback((isFavarite: boolean) => {
    dispatch({
      type: 'setIsFavorite',
      payload: {
        isFavarite,
      },
    });
  }, []);

  const fetchFavoriteStatus = useCallback(async () => {
    const data = await getFavoriteStatus(recipe.id);
    updateFavorite(data.favorite_count, data.is_favorite);
  }, [recipe.id, updateFavorite]);

  useEffect(() => {
    // NOTE: ログインしていない場合は、フォロー状態を取得しない。
    if (isLoggedIn) {
      fetchFavoriteStatus();
    }
  }, [fetchFavoriteStatus, isLoggedIn]);

  const handleAddToFavorite = useCallback(() => {
    addToFavorite(recipe);
    setIsFavorite(true);
    increaseFavoriteCount();
  }, [setIsFavorite, increaseFavoriteCount, recipe]);

  const handleRemoveFromFavorite = useCallback(() => {
    removeFromFavorite(recipe.id);
    setIsFavorite(false);
    decreaseFavoriteCount();
  }, [decreaseFavoriteCount, setIsFavorite, recipe.id]);

  const handleClickFavoriteButton = () => {
    if (state.isFavorite) {
      handleRemoveFromFavorite();
      return;
    }
    handleAddToFavorite();
  };

  return {
    favoriteCount: state.favoriteCount,
    isFavorite: state.isFavorite,
    handleClickFavoriteButton,
  };
};

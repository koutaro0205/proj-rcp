import { User } from '@/@types/data';
import { CurrentUser } from '@/features/currentUser/type';

export const isCurrentUser = (user: User, currentUser: CurrentUser) =>
  user.id === currentUser.id;

// NOTE: 何の配列が渡るかわからないのでunknownを使用
export const isEmptyArray = (array: unknown[]) => array.length === 0;

export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;

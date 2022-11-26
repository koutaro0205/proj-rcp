import { User } from '@/@types/data';
import { CurrentUser } from '@/features/currentUserSlice';

export const isCurrentUser = (user: User, currentUser: CurrentUser) =>
  user.id === currentUser.id;

import { RootState } from '@/common/store';

// NOTE: storeから値を取る際の命名：「select ~」
export const selectIsGlobalLoading = (state: RootState) =>
  state.globalLoading.isLoading;

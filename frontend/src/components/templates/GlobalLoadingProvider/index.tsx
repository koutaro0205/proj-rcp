import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '@/components/atoms/Loading';
import { selectIsGlobalLoading } from '@/features/globalLoading/selectors';

import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const GlobalLoadingProvider: React.FC<Props> = ({ children }) => {
  const isLoading = useSelector(selectIsGlobalLoading);
  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <div className={styles.content}>
            <Loading size="m" color="white">
              データを送信しています。しばらくお待ちください。
            </Loading>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default GlobalLoadingProvider;

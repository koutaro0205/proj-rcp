import React from 'react';

import Loading from '@/components/atoms/Loading';
import { useGlobalLoading } from '@/features/globalLoading/useGlobalLoading';

import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const GlobalLoadingProvider: React.FC<Props> = ({ children }) => {
  const { isLoading } = useGlobalLoading();
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

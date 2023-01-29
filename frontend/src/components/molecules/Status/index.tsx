import React from 'react';

import LinkText from '@/components/atoms/LinkText';
import { Stack } from '@/components/layouts/Stack';

import styles from './styles';

type Props = {
  // FIXME: フォロー機能実装後にオプショナルを外す
  count?: number;
  path: string;
  labal: string;
};

const Status: React.FC<Props> = ({ count = 0, path, labal }) => {
  return (
    <div className={styles.container}>
      <p>{count}</p>
      <Stack size="s" />
      <LinkText
        path={path}
        size="s"
        weight="bold"
        lineHeight="l"
        hasHoverAction
      >
        {labal}
      </LinkText>
    </div>
  );
};

export default Status;

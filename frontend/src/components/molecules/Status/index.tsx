import React from 'react';

import LinkText from '@/components/atoms/LinkText';
import Text from '@/components/atoms/Text';
import { Stack } from '@/components/layouts/Stack';

import styles from './styles';

type Props = {
  // FIXME: フォロー機能実装後にオプショナルを外す
  count?: number;
  path: string;
  labal: string;
  hasLink?: boolean;
};

const Status: React.FC<Props> = ({
  count = 0,
  path,
  labal,
  hasLink = true,
}) => {
  return (
    <div className={styles.container}>
      <p>{count}</p>
      <Stack size="s" />
      {hasLink ? (
        <LinkText
          path={path}
          size="s"
          weight="bold"
          lineHeight="l"
          hasHoverAction
        >
          {labal}
        </LinkText>
      ) : (
        <Text size="s" weight="bold" lineHeight="l">
          {labal}
        </Text>
      )}
    </div>
  );
};

export default Status;

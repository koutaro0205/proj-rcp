import React from 'react';

import { Space } from '@/theme/space';

import { getStyles } from './styles';

export type Props = {
  size: Space;
  isDebugHighlight?: boolean;
};

export const Queue: React.FC<Props> = ({ size, isDebugHighlight = false }) => {
  const styles = getStyles(size, isDebugHighlight);

  return <div className={styles.container} />;
};

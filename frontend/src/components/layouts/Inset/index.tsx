import React from 'react';

import { Space } from '@/theme/space';

import { getStyle } from './styles';

type BaseProps = {
  children: React.ReactElement | React.ReactElement[];
  isDebugHighlight?: boolean;
  direction?: 'column' | 'row';
};

type AllProps = {
  all?: Space;
  horizontal?: never;
  vertical?: never;
} & BaseProps;
type IndividualProps = {
  horizontal?: Space;
  vertical?: Space;
  all?: never;
} & BaseProps;

export type Props = AllProps | IndividualProps;

const Inset: React.FC<Props> = ({
  children,
  all,
  horizontal,
  vertical,
  isDebugHighlight = false,
  direction = 'row',
}) => {
  const styles = getStyle({
    all,
    isDebugHighlight,
    direction,
    horizontal,
    vertical,
  });

  return (
    <div className={styles.container} aria-hidden="true">
      {children}
    </div>
  );
};

export default Inset;

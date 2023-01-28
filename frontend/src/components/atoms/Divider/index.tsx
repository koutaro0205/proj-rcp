import React from 'react';

import { GetStylesInput, getStyles } from './styles';

type Props = GetStylesInput;

const Divider: React.FC<Props> = ({ color = 'alto', width = 'm', pattern }) => {
  const styles = getStyles({ color, width, pattern });
  return <div className={styles.container} />;
};

export default Divider;

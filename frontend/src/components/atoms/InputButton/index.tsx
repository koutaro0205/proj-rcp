import { cx } from '@emotion/css';
import React from 'react';

import styles from './styles';

type Props = {
  text: string;
  _styles?: any;
};

const InputButton: React.FC<Props> = ({ text, _styles }) => {
  return (
    <input type="submit" value={text} className={cx(styles.input, _styles)} />
  );
};

export default InputButton;

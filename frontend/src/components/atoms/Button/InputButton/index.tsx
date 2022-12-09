import { cx } from '@emotion/css';
import React from 'react';

import styles from './styles';

type Props = {
  text: string;
  _styles?: string;
  isCenter?: boolean;
};

const InputButton: React.FC<Props> = ({ text, _styles, isCenter }) => {
  if (isCenter) {
    return (
      <div className={styles.container}>
        <input
          type="submit"
          value={text}
          className={cx(styles.input, _styles)}
        />
      </div>
    );
  }
  return (
    <input type="submit" value={text} className={cx(styles.input, _styles)} />
  );
};

export default InputButton;

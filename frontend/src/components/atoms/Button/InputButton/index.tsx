import { cx } from '@emotion/css';
import React from 'react';

import { Color } from '@/theme/colors';

import styles, { getInputStyles } from './styles';

type Props = {
  text: string;
  _styles?: string;
  color?: Color;
  isCenter?: boolean;
};

const InputButton: React.FC<Props> = ({
  text,
  _styles,
  isCenter,
  color = 'PrimaryColor',
}) => {
  const style = getInputStyles(color);
  if (isCenter) {
    return (
      <div className={styles.container}>
        <input
          type="submit"
          value={text}
          className={cx(style.input, _styles)}
        />
      </div>
    );
  }
  return (
    <input type="submit" value={text} className={cx(style.input, _styles)} />
  );
};

export default InputButton;

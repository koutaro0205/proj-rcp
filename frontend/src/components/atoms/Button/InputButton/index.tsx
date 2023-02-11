import { cx } from '@emotion/css';
import React from 'react';

import { InputType } from '@/common/constants/inputs';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

type Props = {
  type: Extract<InputType, 'submit' | 'button'>;
  value: string;
  _styles?: string;
  color?: Color;
  isCenter?: boolean;
  disabled?: boolean;
  pattern?: 'inline' | 'block';
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const InputButton: React.FC<Props> = ({
  type,
  value,
  _styles,
  isCenter = false,
  color = 'PrimaryColor',
  disabled = false,
  pattern = 'block',
  onClick,
}) => {
  const styles = getStyles({ color, isCenter });

  const getInput = () => {
    return (
      <input
        type={type}
        value={value}
        disabled={disabled}
        onClick={onClick}
        className={cx(styles.input, _styles)}
      />
    );
  };

  if (pattern === 'inline') return getInput();

  return <div className={styles.container}>{getInput()}</div>;
};

export default InputButton;

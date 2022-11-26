import { cx } from '@emotion/css';
import React from 'react';

import styles from './styles';

type Props = {
  children: string | React.ReactNode;
  onClick: () => void;
  _styles?: string;
};

const DeleteLink: React.FC<Props> = ({ children, onClick, _styles }) => {
  return (
    <div
      className={cx(styles.container, _styles)}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
};

export default DeleteLink;

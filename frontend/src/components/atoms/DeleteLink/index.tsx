import { cx } from '@emotion/css';
import React from 'react';

import styles from './styles';

type Props = {
  children: string | React.ReactNode;
  onClick: () => void;
  _styles?: string;
};

// FIXME: DeleteButtonに命名を修正して、buttonタグを使用するよう修正する。
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

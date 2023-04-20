import React from 'react';

import styles from './styles';

// NOTE: CSSを使って独自実装した並び順変更アイコン

const SortableIcon: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.lineTop} />
      <span className={styles.lineMiddle} />
      <span className={styles.lineBottom} />
    </div>
  );
};

export default SortableIcon;

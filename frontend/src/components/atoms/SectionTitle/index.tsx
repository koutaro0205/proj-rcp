import React from 'react';

import styles from './styles';

type Props = {
  sectionTitle: string;
};

const SectionTitle: React.FC<Props> = ({ sectionTitle }) => {
  return <h1 className={styles.sectionTitle}>{sectionTitle}</h1>;
};

export default SectionTitle;

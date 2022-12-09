import React from 'react';

import styles from './styles';

type Props = {
  name: string;
  placeholder?: string;
};

const SearchField: React.FC<Props> = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      className={styles.inputField}
      placeholder={placeholder}
      // onChange={handleChange}
    />
  );
};

export default SearchField;

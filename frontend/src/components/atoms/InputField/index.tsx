import React from 'react';

import styles from './styles';

type Props = {
  name: string;
  type: string;
  id: string;
  accept?: string;
};

const InputField: React.FC<Props> = ({ name, type, id, accept }) => {
  return (
    <input
      className={styles.input}
      type={type}
      id={id}
      name={name}
      accept={accept}
      // onChange={handleInputChange}
      // value={user.name}
    />
  );
};

export default InputField;

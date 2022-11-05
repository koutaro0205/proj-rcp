import React from "react";

import styles from "./styles";

type Props = {
  name: string;
  placeholder: string;
};

const InputField = ({ name, placeholder }: Props) => {
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

export default InputField;

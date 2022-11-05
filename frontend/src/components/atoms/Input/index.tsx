import { cx } from "@emotion/css";
import React from "react";

import styles from "./styles";

type Props = {
  text: string;
  // eslint-disable-next-line react/require-default-props
  _styles?: any;
};

const Input = ({ text, _styles }: Props) => {
  return (
    <input type="submit" value={text} className={cx(styles.input, _styles)} />
  );
};

export default Input;

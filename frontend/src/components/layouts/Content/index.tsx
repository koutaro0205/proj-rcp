import React from "react";

import styles from "./styles";

type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Context;

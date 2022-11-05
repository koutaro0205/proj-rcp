import { cx } from "@emotion/css";
import React from "react";

import styles from "./styles";

type Props = {
  children: React.ReactNode;
  // NOTE: 渡される方が不明確なのでanyで対応
  // eslint-disable-next-line react/require-default-props
  _styles?: any;
};

const LinkText = ({ children, _styles }: Props) => {
  return <div className={cx(styles.link, _styles)}>{children}</div>;
};

export default LinkText;

import { css } from "@emotion/css";

import colors from "@/theme/colors";

const styles = {
  container: css({
    width: "100%",
  }),
  inner: css({
    display: "flex",
    justifyContent: "space-between",
    height: "92px",
    alignItems: "center",
  }),
  menuList: css({
    display: "flex",
    listStyleType: "none",
    paddingLeft: "0px",
  }),
  nav: css({
    backgroundColor: colors.PrimaryColor,
  }),
  navInner: css({
    position: "relative",
  }),
  navList: css({
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
  }),
};

export default styles;

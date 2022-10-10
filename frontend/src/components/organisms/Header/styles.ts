import { css } from "@emotion/css";

import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";

const styles = {
  container: css({
    width: "100%",
  }),
  logo: css({
    fontSize: fontSizes.extraLarge,
    fontFamily: "Allison, cursive",
  }),
  logoLink: css({
    color: colors.baseColor,
    textDecoration: "none",
  }),
  inner: css({
    display: "flex",
    justifyContent: "space-between",
    height: "92px",
    alignItems: "center",
  }),
};

export default styles;

import { css } from "@emotion/css";

import colors from "@/theme/colors";
import fontFamily from "@/theme/fontFamily";
import fontSizes from "@/theme/fontSize";

const styles = {
  container: css({
    fontSize: fontSizes.extraLarge,
    fontFamily: fontFamily.logo,
  }),
  linkText: css({
    color: colors.baseColor,
    textDecoration: "none",
  }),
};

export default styles;

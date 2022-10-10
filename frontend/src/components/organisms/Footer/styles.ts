import { css } from "@emotion/css";

import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";

const styles = {
  container: css({
    backgroundColor: colors.PrimaryColor,
    fontSize: fontSizes.extraSmall,
  }),
  inner: css({
    paddingTop: space.small,
    paddingBottom: space.zero,
  }),
  list: css({
    display: "flex",
    justifyContent: "center",
  }),
  item: css({
    marginRight: space.small,
  }),
  link: css({
    color: colors.white,
  }),
  copyright: css({
    textAlign: "center",
    marginTop: space.medium,
  }),
};

export default styles;

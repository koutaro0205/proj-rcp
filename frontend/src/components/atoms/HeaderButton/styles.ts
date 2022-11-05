import { css } from "@emotion/css";

import borderRadius from "@/theme/borderRadius";
import colors from "@/theme/colors";
import space from "@/theme/space";

const styles = {
  container: css({
    borderRadius: borderRadius.small,
    paddingTop: space.small,
    paddingBottom: space.small,
    paddingLeft: space.medium,
    paddingRight: space.medium,
    "&:first-child": {
      backgroundColor: colors.PrimaryColor,
    },
    "&:nth-child(n+2)": {
      backgroundColor: colors.favorite,
      marginLeft: space.medium,
    },
  }),
};

export default styles;

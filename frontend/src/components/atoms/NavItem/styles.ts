import { css } from "@emotion/css";

import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";

const styles = {
  container: css({
    marginTop: space.medium,
    marginBottom: space.medium,
    "&:nth-child(n+2)": {
      marginLeft: space.large,
    },
  }),
  navLink: css({
    color: colors.black,
    fontSize: fontSizes.small,
    cursor: "pointer",
  }),
};

export default styles;

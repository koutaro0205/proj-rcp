import { css } from "@emotion/css";

import borderRadius from "@/theme/borderRadius";
import colors from "@/theme/colors";
import fontFamily from "@/theme/fontFamily";
import fontSizes from "@/theme/fontSize";
import lineHeight from "@/theme/lineHeight";
import space from "@/theme/space";

const styles = {
  container: css({
    width: "100%",
  }),
  logo: css({
    fontSize: fontSizes.extraLarge,
    fontFamily: fontFamily.logo,
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
  searchContainer: css({
    width: "450px",
    marginTop: space.extraSmall,
    marginButtom: space.extraSmall,
  }),
  menuList: css({
    display: "flex",
  }),
  menuItem: css({
    borderRadius: borderRadius.small,
    paddingTop: space.small,
    paddingBottom: space.small,
    paddingLeft: space.small,
    paddingRight: space.small,
    "&:first-child": {
      backgroundColor: colors.PrimaryColor,
    },
    "&:nth-child(n+2)": {
      backgroundColor: colors.favorite,
      marginLeft: space.small,
    },
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
  }),
  navItem: css({
    marginTop: space.small,
    marginBottom: space.small,
    "&:nth-child(n+2)": {
      marginLeft: space.medium,
    },
  }),
  navLink: css({
    color: colors.black,
    fontSize: fontSizes.small,
    cursor: "pointer",
  }),
};

export default styles;

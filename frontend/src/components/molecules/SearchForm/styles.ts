import { css } from "@emotion/css";

import borderRadius from "@/theme/borderRadius";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import lineHeight from "@/theme/lineHeight";
import space from "@/theme/space";

const styles = {
  searchForm: css({
    width: "100%",
  }),
  searchText: css({
    marginTop: space.extraSmall,
    fontSize: fontSizes.small,
  }),
  searchField: css({
    width: "60%",
    paddingRight: space.small,
    paddingLeft: space.small,
    height: space.medium,
    marginRight: space.extraSmall,
    fontSize: fontSizes.small,
    lineHeight: lineHeight.medium,
    color: "#555555",
    backgroundColor: colors.white,
    backgroundImage: "none",
    border: "1px solid #ccc",
    borderRadius: borderRadius.small,
  }),
  searchSubmit: css({
    width: "30%",
    paddingTop: space.extraSmall,
    paddingButtom: space.extraSmall,
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
};

export default styles;

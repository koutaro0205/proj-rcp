import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

const defaultStyle = {
  width: '100%',
  color: colors.black,
  marginBottom: space.mediumLarge,
  border: `${colors.PrimaryColor} solid 3px`,
  borderRadius: borderRadius.small,
  paddingTop: space.extraExtraSmall,
  paddingBottom: space.extraExtraSmall,
};

const styles = {
  followButton: css({
    ...defaultStyle,
    backgroundColor: colors.PrimaryColor,
  }),
  unfollowButton: css({
    ...defaultStyle,
    backgroundColor: colors.white,
  }),
};

export default styles;

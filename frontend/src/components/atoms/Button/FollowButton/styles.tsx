import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

const defaultStyle = {
  width: '100%',
  color: colors.black,
  marginBottom: space.ml,
  border: `${colors.PrimaryColor} solid 3px`,
  borderRadius: borderRadius.s,
  paddingBlock: space.xxs,
  cursor: 'pointer',
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

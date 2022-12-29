import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  inputField: css({
    width: '60%',
    paddingRight: space.small,
    paddingLeft: space.small,
    height: '100%',
    marginRight: space.extraSmall,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.medium,
    color: colors.grey,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: borderRadius.small,
  }),
};

export default styles;

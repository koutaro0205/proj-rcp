import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  inputField: css({
    width: '60%',
    paddingInline: space.s,
    height: '100%',
    marginRight: space.xs,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
    color: colors.grey,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    border: `1px solid ${colors.alto}`,
    borderRadius: borderRadius.s,
  }),
};

export default styles;

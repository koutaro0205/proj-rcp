import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

export const getInputStyles = (color: Color) => {
  return {
    input: css({
      display: 'inline-block',
      marginBottom: space.zero,
      fontWeight: 'nomal',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundImage: 'none',
      borderColor: colors[color],
      borderWidth: '3px',
      borderStyle: 'solid',
      fontSize: fontSizes.small,
      paddingTop: space.extraExtraSmall,
      paddingBottom: space.extraExtraSmall,
      paddingLeft: space.small,
      paddingRight: space.small,
      lineHeight: lineHeights.medium,
      borderRadius: borderRadius.small,
      cursor: 'pointer',
      color: colors.black,
      backgroundColor: colors[color],
    }),
  };
};

const styles = {
  container: css({
    textAlign: 'center',
  }),
};

export default styles;

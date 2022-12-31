import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  input: css({
    display: 'block',
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    width: '100%',
    padding: `${space.extraSmall} ${space.small}`,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.medium,
    color: colors.grey,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    border: `1px solid #ccc`,
    borderRadius: borderRadius.small,
    marginBottom: space.mediumLarge,
    marginTop: space.extraExtraSmall,
    boxSizing: 'border-box',
  }),
};

export default styles;

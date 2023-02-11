import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  container: css({
    display: 'inline-block',
    width: '100%',
    fontWeight: fontWeight.bold,
  }),
  labelContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: space.xxs,
  }),
  inputField: css({
    display: 'block',
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    width: '100%',
    padding: `${space.xs} ${space.s}`,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
    color: colors.grey,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    border: `1px solid ${colors.alto}`,
    borderRadius: borderRadius.s,
    boxSizing: 'border-box',
  }),
};

export default styles;

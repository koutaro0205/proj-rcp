import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';
import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
  }),
  label: css({
    display: 'inline-block',
    backgroundColor: colors.PrimaryColor,
    fontWeight: fontWeight.bold,
    fontSize: fontSizes.s,
    paddingBlock: space.xxs,
    paddingInline: space.xs,
    borderRadius: borderRadius.m,
  }),
  itemValue: css({
    fontSize: fontSizes.m,
  }),
};

export default styles;

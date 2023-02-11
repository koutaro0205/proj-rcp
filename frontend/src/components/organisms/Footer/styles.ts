import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    backgroundColor: colors.PrimaryColor,
    fontSize: fontSizes.xs,
  }),
  inner: css({
    paddingBlock: space.m,
  }),
  list: css({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: space.xxl,
    gap: space.l,
  }),
};

export default styles;

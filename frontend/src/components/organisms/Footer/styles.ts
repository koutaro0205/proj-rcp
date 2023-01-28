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
    paddingBlock: space.s,
  }),
  list: css({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: space.xl,
  }),
};

export default styles;

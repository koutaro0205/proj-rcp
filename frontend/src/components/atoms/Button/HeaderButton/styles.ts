import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    borderRadius: borderRadius.s,
    paddingBlock: space.s,
    paddingInline: space.m,
    '&:first-child': {
      backgroundColor: colors.PrimaryColor,
    },
    '&:nth-child(n+2)': {
      backgroundColor: colors.favorite,
      marginLeft: space.m,
    },
  }),
};

export default styles;

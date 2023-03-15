import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({}),
  ingredientList: css({
    borderBottom: NORMAL_BORDER_STYLE,
  }),
  ingredientItem: css({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: space.s,
    paddingInline: space.l,
    borderTop: NORMAL_BORDER_STYLE,
    ':nth-child(even)': {
      backgroundColor: colors.alto,
    },
  }),
};

export default styles;

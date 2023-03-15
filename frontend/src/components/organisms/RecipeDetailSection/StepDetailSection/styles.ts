import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  container: css({}),
  recipeStepList: css({
    borderBottom: NORMAL_BORDER_STYLE,
  }),
  stepItem: css({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: space.m,
    borderTop: NORMAL_BORDER_STYLE,
    alignItems: 'flex-start',
    gap: space.m,
  }),
  imageWrapper: css({
    fontSize: 0,
  }),
  description: css({
    lineHeight: lineHeights.m,
    flex: 1,
  }),
};

export default styles;

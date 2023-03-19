import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import borderRadius from '@/theme/borderRadius';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  // FIXME: 必要なければ削除する。
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
  tip: css({
    lineHeight: lineHeights.l,
    padding: space.m,
    fontSize: fontSizes.m,
    border: NORMAL_BORDER_STYLE,
    borderRadius: borderRadius.s,
  }),
};

export default styles;

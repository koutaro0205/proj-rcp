import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  imageSection: css({
    position: 'relative',
    alignSelf: 'center',
  }),
  imageWrapper: css({
    // NOTE: 画像下部に若干の余白できるのを調整
    fontSize: 0,
  }),
  categoryWrapper: css({
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.white,
    paddingBlock: space.xs,
    paddingInline: space.s,
    borderRadius: borderRadius.s,
  }),
  likeCountButtonWrapper: css({
    position: 'absolute',
    bottom: space.m,
    right: space.m,
  }),
  recipeInfoSection: css({
    display: 'flex',
    gap: space.xl,
  }),
  description: css({
    padding: space.m,
    border: NORMAL_BORDER_STYLE,
    borderRadius: borderRadius.s,
    lineHeight: lineHeights.l,
    fontSize: fontSizes.m,
  }),
};

export default styles;

import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
    // NOTE: 画像の角が尖ってしまうのを防ぎ、カードに合わせる。
    overflow: 'hidden',
    flex: 1,
    minWidth: 230,
    maxWidth: 340,
    transition: '.3s',
    ':hover': {
      boxShadow: `5px 5px 5px ${colors.alto}`,
    },
  }),
  imageWrapper: css({
    fontSize: 0,
    borderBottom: NORMAL_BORDER_STYLE,
    width: '100%',
    height: 200,
  }),
  image: css({
    borderRadius: `${borderRadius.l} ${borderRadius.l} 0 0`,
    objectFit: 'cover',
  }),
  titleWrapper: css({
    paddingBlock: space.xs,
    minHeight: 80,
    overflow: 'hidden',
  }),
  userInfo: css({
    display: 'flex',
    alignItems: 'center',
    gap: space.m,
    width: 'fit-content',
  }),
  recipeInfo: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  recipeInfoItem: css({
    display: 'flex',
    alignItems: 'center',
  }),
};

export default styles;

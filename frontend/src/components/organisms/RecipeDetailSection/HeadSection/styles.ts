import { css } from '@emotion/css';

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
  categoriesList: css({
    position: 'absolute',
    top: 10,
    left: 10,
    display: 'flex',
    gap: space.s,
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
};

export default styles;

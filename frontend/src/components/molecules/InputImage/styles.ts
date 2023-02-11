import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    gap: space.xl,
  }),
  imageWrapper: css({
    borderRadius: borderRadius.circle,
    position: 'relative',
    border: `solid 4px ${colors.PrimaryColor}`,
    verticalAlign: 'bottom',
    // NOTE: next/imageを使った時、下部にできる謎の余白を治す。
    fontSize: 0,
  }),
  image: css({
    borderRadius: borderRadius.circle,
    objectFit: 'cover',
    verticalAlign: 'bottom',
  }),
  deleteButtonWrapper: css({
    position: 'absolute',
    bottom: -40,
    textAlign: 'center',
    left: 16,
  }),
};

export default styles;

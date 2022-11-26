import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import space from '@/theme/space';

export const USER_IMAGE_SIZE = '100px';

const styles = {
  imageWrapper: css({
    width: USER_IMAGE_SIZE,
    height: USER_IMAGE_SIZE,
    marginRight: space.large,
    borderRadius: borderRadius.circle,
  }),
  image: css({
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.circle,
    objecttFit: 'cover',
    objectPosition: 'center',
  }),
};

export default styles;

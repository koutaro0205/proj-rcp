import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    width: '100',
  }),
  userName: css({
    fontWeight: 'bold',
    fontSize: fontSizes.ml,
    marginBottom: space.m,
  }),
  postsCount: css({
    fontSize: fontSizes.s,
  }),
};

export default styles;

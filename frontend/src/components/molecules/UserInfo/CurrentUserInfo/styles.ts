import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    width: '100',
  }),
  userName: css({
    fontWeight: 'bold',
    fontSize: fontSizes.mediumLarge,
    marginBottom: space.medium,
  }),
  postsCount: css({
    fontSize: fontSizes.small,
  }),
};

export default styles;

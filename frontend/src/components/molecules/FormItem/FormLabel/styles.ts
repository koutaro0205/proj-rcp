import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    fontWeight: fontWeight.bold,
    fontSize: fontSizes.s,
  }),
};

export default styles;

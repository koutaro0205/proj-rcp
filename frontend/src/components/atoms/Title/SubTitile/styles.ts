import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const BORDER_WIDTH = 5;

const styles = {
  container: css({
    position: 'relative',
    fontSize: fontSizes.ml,
    marginTop: space.ml,
    marginBottom: space.l,
    paddingLeft: space.s,
    ':before': {
      content: `""`,
      width: BORDER_WIDTH,
      height: 30,
      borderRadius: BORDER_WIDTH / 2,
      background: colors.baseColor,
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
};

export default styles;

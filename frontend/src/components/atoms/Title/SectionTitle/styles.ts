import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSize from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';
import space from '@/theme/space';

const BORDER_WIDTH = 6;

const styles = {
  sectionTitle: css({
    position: 'relative',
    fontSize: fontSize.l,
    marginTop: space.ml,
    marginBottom: space.l,
    paddingLeft: space.s,
    fontWeight: fontWeight.bold,
    ':before': {
      content: `""`,
      width: BORDER_WIDTH,
      height: 36,
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

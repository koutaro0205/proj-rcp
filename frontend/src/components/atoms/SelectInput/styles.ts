import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    position: 'relative',
    ':after': {
      content: '""',
      width: 6,
      height: 6,
      border: 0,
      borderTop: `solid 2px ${colors.grey}`,
      borderRight: `solid 2px ${colors.grey}`,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 12,
      margin: 'auto',
      transform: 'rotate(135deg)',
      pointerEvents: 'none',
    },
  }),
  selector: css({
    width: '100%',
    fontSize: fontSizes.s,
    padding: `${space.s} ${space.m}`,
    borderColor: colors.alto,
    backgroundColor: colors.white,
    WebkitAppearance: 'none',
    appearance: 'none',
    MozAppearance: 'none',
  }),
};

export default styles;

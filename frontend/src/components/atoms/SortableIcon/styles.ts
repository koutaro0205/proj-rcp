import { css, CSSInterpolation } from '@emotion/css';

import colors from '@/theme/colors';

const ICON_SIZE = 18;

const ICON_CONTENT_STYLES: CSSInterpolation = {
  content: '""',
  display: 'block',
  height: '1px',
  width: '100%',
  borderRadius: '1px',
  backgroundColor: colors.black,
  position: 'absolute',
};

const styles = {
  container: css({
    width: ICON_SIZE,
    height: ICON_SIZE,
    position: 'relative',
  }),
  lineTop: css({
    ...ICON_CONTENT_STYLES,
    top: '25%',
  }),
  lineMiddle: css({
    ...ICON_CONTENT_STYLES,
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  lineBottom: css({
    ...ICON_CONTENT_STYLES,
    bottom: '25%',
  }),
};

export default styles;

import { css } from '@emotion/css';

import colors from '@/theme/colors';
import zIndex from '@/theme/zIndex';

const styles = {
  container: css({
    position: 'fixed',
    inset: 0,
    zIndex: zIndex.stronger,
    backgroundColor: colors.black,
    opacity: 0.8,
    transition: '0.5s',
    overflow: 'hidden',
  }),
  content: css({
    zIndex: zIndex.stronger + 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
};

export default styles;

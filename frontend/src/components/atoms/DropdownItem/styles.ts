import { css } from '@emotion/css';

import space from '@/theme/space';

const styles = {
  container: css({
    padding: space.medium,
    widows: '100%',
    '&: hover': {
      transition: '0.3s',
      opacity: 0.5,
    },
  }),
};

export default styles;

import { css } from '@emotion/css';

import space from '@/theme/space';

const styles = {
  container: css({
    width: '100%',
    padding: space.l,
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.ml,
  }),
  empty: css({
    width: '100%',
  }),
};

export default styles;

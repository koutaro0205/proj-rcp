import { css } from '@emotion/css';

import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBlock: space.l,
  }),
  image: css({
    display: 'inline-block',
    marginRight: space.s,
  }),
};

export default styles;

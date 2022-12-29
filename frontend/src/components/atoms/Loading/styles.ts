import { css } from '@emotion/css';

import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: space.large,
    marginBottom: space.large,
  }),
  image: css({
    display: 'inline-block',
    marginRight: space.small,
  }),
};

export default styles;

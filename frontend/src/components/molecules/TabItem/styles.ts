import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    border: `1px solid ${colors.grey}`,
    marginBottom: space.xs,
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: space.ml,
    cursor: 'pointer',
  }),
};

export default styles;

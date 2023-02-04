import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    border: `1px solid ${colors.grey}`,
    marginBottom: space.xs,
    ':hover': {
      transition: '0.5s',
      backgroundColor: colors.background,
    },
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

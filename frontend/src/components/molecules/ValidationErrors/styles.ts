import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    marginTop: space.s,
  }),
  errorMessagesContainer: css({
    color: colors.error,
    marginBottom: space.l,
    listStyleType: 'disc',
    listStylePosition: 'inside',
  }),
  errorMessage: css({
    '&:nth-child(n+2)': {
      marginTop: space.xs,
    },
  }),
};

export default styles;

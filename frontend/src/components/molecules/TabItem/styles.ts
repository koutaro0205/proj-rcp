import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    border: `1px solid ${colors.grey}`,
    marginBottom: space.extraSmall,
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: space.mediumLarge,
    cursor: 'pointer',
  }),
};

export default styles;

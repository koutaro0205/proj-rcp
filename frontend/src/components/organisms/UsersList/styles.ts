import { css } from '@emotion/css';

import { SIDE_COLUMNS_USERS_WIDTH } from '@/common/constants/flatDimention';

const styles = {
  container: css({
    width: SIDE_COLUMNS_USERS_WIDTH,
  }),
  paginationWrapper: css({
    display: 'flex',
    justifyContent: 'center',
  }),
};

export default styles;

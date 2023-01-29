import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    paddingBlock: space.m,
    borderBottom: `${colors.black} solid 0.5px`,
  }),
  userName: css({
    fontSize: fontSizes.m,
    color: colors.black,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  deleteButtonWrapper: css({
    marginLeft: space.m,
  }),
  dividerWrapper: css({
    marginLeft: space.m,
    height: '20px',
  }),
  followButtonWrapper: css({
    marginLeft: 'auto',
  }),
};

export default styles;

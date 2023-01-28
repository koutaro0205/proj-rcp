import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    position: 'relative',
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
  deleteLink: css({
    paddingLeft: space.m,
    marginLeft: space.m,
    borderLeft: `${colors.black} solid 1px`,
  }),
};

export default styles;

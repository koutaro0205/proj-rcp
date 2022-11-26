import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: space.medium,
    paddingTop: space.medium,
    borderBottom: `${colors.black} solid 0.5px`,
  }),
  userName: css({
    fontSize: fontSizes.medium,
    color: colors.black,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  deleteLink: css({
    paddingLeft: space.medium,
    marginLeft: space.medium,
    borderLeft: `${colors.black} solid 1px`,
  }),
};

export default styles;

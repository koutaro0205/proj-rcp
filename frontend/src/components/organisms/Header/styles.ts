import { css } from '@emotion/css';

import colors from '@/theme/colors';

const styles = {
  container: css({
    width: '100%',
  }),
  inner: css({
    display: 'flex',
    justifyContent: 'space-between',
    height: '92px',
    alignItems: 'center',
  }),
  menuList: css({
    display: 'flex',
    listStyleType: 'none',
    paddingLeft: '0px',
  }),
  nav: css({
    backgroundColor: colors.PrimaryColor,
  }),
  navInner: css({
    position: 'relative',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  navList: css({
    display: 'flex',
    listStyleType: 'none',
  }),
};

export default styles;

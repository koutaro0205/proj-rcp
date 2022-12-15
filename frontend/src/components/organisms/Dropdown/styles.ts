import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    marginLeft: space.large,
  }),
  dropdown: css({
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: `translateY(-40%)`,
      width: 0,
      height: 0,
      // 三角形のスタイル
      borderLeft: `6px solid transparent`,
      borderRight: `6px solid transparent`,
      borderTop: `6px solid black`,
    },
  }),
  dropdownMenu: css({
    position: 'relative',
    display: 'inline-block',
    transition: '0.3s',
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    fontSize: fontSizes.small,
    backgroundColor: 'transparent',
    marginRight: space.extraSmall,
  }),
  dropdownList: css({
    position: 'absolute',
    top: '32px',
    backgroundColor: colors.white,
    width: '160px',
    border: `${colors.grey} solid 1px`,
    zIndex: 10,
  }),
  logout: css({
    cursor: 'pointer',
  }),
};

export default styles;

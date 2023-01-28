import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    marginBlock: space.l,
    display: 'flex',
  }),
  followingWrapper: css({
    paddingRight: space.ml,
    borderRight: `solid 1px ${colors.black}`,
  }),
  followerWrapper: css({
    paddingLeft: space.ml,
  }),
  followCount: css({
    marginBottom: space.xs,
    textAlign: 'center',
  }),
};

export default styles;

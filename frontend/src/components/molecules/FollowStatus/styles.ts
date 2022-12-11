import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const VERTICAL_SPACE = space.large;

const styles = {
  container: css({
    marginTop: VERTICAL_SPACE,
    marginBottom: VERTICAL_SPACE,
    display: 'flex',
  }),
  followingWrapper: css({
    paddingRight: space.mediumLarge,
    borderRight: `solid 1px ${colors.black}`,
  }),
  followerWrapper: css({
    paddingLeft: space.mediumLarge,
  }),
  followCount: css({
    marginBottom: space.extraSmall,
    textAlign: 'center',
  }),
};

export default styles;

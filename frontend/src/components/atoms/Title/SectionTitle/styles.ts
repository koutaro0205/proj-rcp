import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSize from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  sectionTitle: css({
    fontSize: fontSize.large,
    marginTop: space.mediumLarge,
    marginBottom: space.large,
    borderLeft: `solid 6px ${colors.baseColor}`,
    paddingLeft: space.extraSmall,
    fontWeight: 'bold',
  }),
};

export default styles;

import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSize from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  sectionTitle: css({
    fontSize: fontSize.l,
    marginTop: space.ml,
    marginBottom: space.l,
    borderLeft: `solid 6px ${colors.baseColor}`,
    paddingLeft: space.xs,
    fontWeight: 'bold',
  }),
};

export default styles;

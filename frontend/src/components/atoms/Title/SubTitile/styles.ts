import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    fontSize: fontSizes.ml,
    marginTop: space.ml,
    marginBottom: space.l,
    borderLeft: `solid 6px ${colors.baseColor}`,
    paddingLeft: space.xxs,
  }),
};

export default styles;

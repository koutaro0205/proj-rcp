import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

const styles = {
  container: css({
    fontSize: fontSizes.mediumLarge,
    marginTop: space.mediumLarge,
    marginBottom: space.large,
    borderLeft: `solid 6px ${colors.baseColor}`,
    paddingLeft: space.extraExtraSmall,
  }),
};

export default styles;

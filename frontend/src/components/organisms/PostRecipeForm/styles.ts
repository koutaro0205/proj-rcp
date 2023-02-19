import { css } from '@emotion/css';

import space from '@/theme/space';

const styles = {
  container: css({
    display: 'block',
  }),
  recipeInformationSection: css({
    display: 'flex',
  }),
  attachedImageWrapper: css({}),
  selectorsWrapper: css({
    flex: 1,
  }),
  servingsInput: css({
    display: 'flex',
  }),
  unitText: css({
    display: 'inline-block',
    paddingBottom: space.s,
    alignSelf: 'flex-end',
  }),
};

export default styles;

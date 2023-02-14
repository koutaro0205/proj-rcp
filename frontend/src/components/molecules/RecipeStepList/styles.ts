import { css } from '@emotion/css';

import { BORDER_STYLE } from './RecipeStepItem/styles';

const styles = {
  // FIXME: 実装時に必要なければ削除する。
  container: css({}),
  stepsContainer: css({
    borderTop: BORDER_STYLE,
  }),
  buttonWrapper: css({
    textAlign: 'center',
  }),
};

export default styles;

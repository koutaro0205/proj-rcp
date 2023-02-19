import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';

const styles = {
  // FIXME: 実装時に必要なければ削除する。
  container: css({}),
  stepsContainer: css({
    borderTop: NORMAL_BORDER_STYLE,
  }),
  buttonWrapper: css({
    textAlign: 'center',
  }),
};

export default styles;

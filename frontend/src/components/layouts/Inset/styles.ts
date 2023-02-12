import { css } from '@emotion/css';

import colors from '@/theme/colors';
import spacing, { Space } from '@/theme/space';

type GetStyleInput = {
  all?: Space;
  horizontal?: Space;
  vertical?: Space;
  isDebugHighlight: boolean;
  direction: 'column' | 'row';
};

export const getStyle = ({
  all,
  isDebugHighlight,
  direction,
  horizontal,
  vertical,
}: GetStyleInput) => {
  if (all) {
    return {
      container: css({
        display: 'flex',
        flexDirection: direction,
        padding: spacing[all],
        backgroundColor: isDebugHighlight ? colors.error : colors.transparent,
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
      }),
    };
  }

  return {
    container: css({
      display: 'flex',
      flexDirection: direction,
      paddingTop: vertical ? spacing[vertical] : 0,
      paddingBottom: vertical ? spacing[vertical] : 0,
      paddingRight: horizontal ? spacing[horizontal] : 0,
      paddingLeft: horizontal ? spacing[horizontal] : 0,
      backgroundColor: isDebugHighlight ? colors.error : colors.transparent,
    }),
  };
};

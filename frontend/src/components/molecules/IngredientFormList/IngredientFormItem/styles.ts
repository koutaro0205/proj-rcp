import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import colors from '@/theme/colors';
import space from '@/theme/space';

export const getStyles = (isDragging: boolean) => {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      borderBottom: NORMAL_BORDER_STYLE,
      paddingBlock: space.ml,
      ...(isDragging && {
        backgroundColor: colors.alto,
      }),
    }),
    sortableIconWrapper: css({
      marginInline: space.ml,
      cursor: 'grab',
    }),
    content: css({
      display: 'flex',
      flex: 1,
    }),
    attachedImageWrapper: css({
      flex: 1,
    }),
    iconContainer: css({
      cursor: 'pointer',
    }),
  };
};

import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

export const BORDER_STYLE = `solid 1px ${colors.alto}`;

export const getStyles = (isDragging: boolean) => {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      borderBottom: BORDER_STYLE,
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

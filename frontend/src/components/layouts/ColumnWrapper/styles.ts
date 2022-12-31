import { css } from '@emotion/css';

export const getStyles = (columnWidth: string) => {
  return {
    container: css({
      width: columnWidth,
    }),
  };
};

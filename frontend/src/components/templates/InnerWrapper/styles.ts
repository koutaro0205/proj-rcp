import { css } from '@emotion/css';

export const getStyles = (formWidth: string) => {
  return {
    container: css({
      width: formWidth,
      margin: '0 auto',
    }),
  };
};

import { css } from '@emotion/css';

import colors, { Color } from '@/theme/colors';
import fontWeight from '@/theme/fontWeight';

const BUTTON_HEIGHT = 50;

type GetStyleInput = {
  isLiked: boolean;
  backgroundColor: Color;
};

export const getStyles = ({ isLiked, backgroundColor }: GetStyleInput) => {
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 160,
      height: BUTTON_HEIGHT,
      borderRadius: BUTTON_HEIGHT / 2,
      border: 'none',
      backgroundColor: isLiked ? colors.like : colors[backgroundColor],
      color: isLiked ? colors.white : colors.black,
      transition: '.3s',
      cursor: 'pointer',
      // isLiked=trueだった場合は色を固定するので:hoverなし
      // ...(!isLiked && {
      //   ':hover': {
      //     backgroundColor: colors.like,
      //     color: colors.white,
      //     transition: '.3s',
      //   },
      // }),
    }),
    likeCountContainer: css({
      display: 'flex',
      flexDirection: 'column',
    }),
    likeLabel: css({
      fontWeight: fontWeight.bold,
      marginBottom: 2,
    }),
  };
};

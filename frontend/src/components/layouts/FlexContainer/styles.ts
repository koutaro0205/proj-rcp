import { css } from '@emotion/css';

import {
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from '@/@types/styles';

export const getStyles = (
  alignItems?: CSSPropertyAlignItems,
  alignContent?: CSSPropertyAlignContent,
  justifyContent?: CSSPropertyJustifyContent,
  justifyItems?: CSSPropertyJustifyItems,
  flexWrap?: CSSPropertyFlexWrap,
  flexBasis?: string,
  flexDirection?: CSSPropertyFlexDirection,
  flexGrow?: string,
  flexShrink?: string,
  justifySelf?: CSSPropertyJustifySelf,
  alignSelf?: CSSPropertyAlignSelf,
  order?: string,
  gap?: number | string
) => {
  const styles = {
    container: css({
      display: 'flex',
      alignItems,
      alignContent,
      justifyContent,
      justifyItems,
      flexWrap,
      flexBasis,
      flexDirection,
      flexGrow,
      justifySelf,
      flexShrink,
      alignSelf,
      order,
      gap,
    }),
  };

  return styles;
};

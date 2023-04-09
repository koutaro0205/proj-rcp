import React from 'react';

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

import { getStyles } from './styles';

export type FlexStyle = {
  alignItems?: CSSPropertyAlignItems;
  alignContent?: CSSPropertyAlignContent;
  justifyContent?: CSSPropertyJustifyContent;
  justifyItems?: CSSPropertyJustifyItems;
  flexWrap?: CSSPropertyFlexWrap;
  flexBasis?: string;
  flexDirection?: CSSPropertyFlexDirection;
  flexGrow?: string;
  flexShrink?: string;
  justifySelf?: CSSPropertyJustifySelf;
  alignSelf?: CSSPropertyAlignSelf;
  order?: string;
  gap?: number | string;
};

type Children = {
  children: React.ReactNode;
};

type Props = FlexStyle & Children;

const FlexContainer: React.FC<Props> = ({
  children,
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
}) => {
  const styles = getStyles(
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
    gap
  );
  return <div className={styles.container}>{children}</div>;
};

export default FlexContainer;

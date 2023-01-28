import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import space from '@/theme/space';

export type AlertPatterns = 'danger' | 'warning' | 'success' | 'info';

const defaultStyle = {
  padding: space.m,
  marginBlock: space.ml,
  borderRadius: borderRadius.s,
};

// FIXME: カラーをテーマに切り出す
// HACK: 共通化の方法を考える。
const getColor = (patterns: AlertPatterns) => {
  switch (patterns) {
    case 'danger':
      return {
        color: '#a94442',
        backgroundColor: '#f2dede',
        borderColor: '#ebccd1',
      };
    case 'warning':
      return {
        color: '#856404',
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba',
      };
    case 'success':
      return {
        color: '#3c763d',
        backgroundColor: '#dff0d8',
        borderColor: '#d6e9c6',
      };
    case 'info':
      return {
        color: '#0c5460',
        backgroundColor: '#d1ecf1',
        borderColor: '#bee5eb',
      };
    default:
      return undefined;
  }
};

export const getAlertStyle = (patterns: AlertPatterns) => {
  const colors = getColor(patterns);
  return css({
    ...defaultStyle,
    ...colors,
  });
};

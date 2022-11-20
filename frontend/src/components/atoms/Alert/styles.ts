import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import space from '@/theme/space';

export type AlertPatterns = 'danger' | 'warning' | 'success' | 'info';

const defaultStyle = {
  padding: space.medium,
  marginBottom: space.mediumLarge,
  marginTop: space.mediumLarge,
  border: '1px solid transparent',
  borderRadius: borderRadius.small,
};

export const getAlertStyle = (patterns: AlertPatterns) => {
  switch (patterns) {
    case 'danger':
      return css({
        ...defaultStyle,
        color: '#a94442',
        backgroundColor: '#f2dede',
        borderColor: '#ebccd1',
      });
    case 'warning':
      return css({
        ...defaultStyle,
        color: '#856404',
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba',
      });
    case 'success':
      return css({
        ...defaultStyle,
        color: '#3c763d',
        backgroundColor: '#dff0d8',
        borderColor: '#d6e9c6',
      });
    case 'info':
      return css({
        ...defaultStyle,
        color: '#0c5460',
        backgroundColor: '#d1ecf1',
        borderColor: '#bee5eb',
      });
    default:
      return undefined;
  }
};

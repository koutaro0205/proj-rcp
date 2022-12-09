import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import fontSizes from '@/theme/fontSize';
import lineHeight from '@/theme/lineHeight';
import space from '@/theme/space';

const styles = {
  container: css({
    textAlign: 'center',
  }),
  input: css({
    display: 'inline-block',
    marginBottom: space.zero,
    fontWeight: 'nomal',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundImage: 'none',
    borderColor: 'transparent',
    borderWidth: '3px',
    borderStyle: 'solid',
    fontSize: fontSizes.small,
    paddingTop: space.extraExtraSmall,
    paddingBottom: space.extraExtraSmall,
    paddingLeft: space.small,
    paddingRight: space.small,
    lineHeight: lineHeight.medium,
    borderRadius: borderRadius.small,
    cursor: 'pointer',
  }),
};

export default styles;

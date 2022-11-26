import { css } from '@emotion/css';

import { SIGNUP_FORM_WIDTH } from '@/common/constants/flatDimention';
import colors from '@/theme/colors';
import lineHeight from '@/theme/lineHeight';
import space from '@/theme/space';

const styles = {
  container: css({
    width: SIGNUP_FORM_WIDTH,
    margin: '0 auto',
  }),
  formContainer: css({
    display: 'block',
    width: '100%',
    marginBottom: space.large,
  }),
  submitButton: css({
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
  text: css({
    textAlign: 'center',
    lineHeight: lineHeight.extraLarge,
    marginBottom: space.large,
  }),
};

export default styles;

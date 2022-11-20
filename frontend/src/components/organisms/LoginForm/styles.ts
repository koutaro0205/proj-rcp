import { css } from '@emotion/css';

import { SIGNUP_FORM_WIDTH } from '@/common/constants/flatDimention';
import colors from '@/theme/colors';
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
  submitButtonContainer: css({
    textAlign: 'center',
  }),
  submitButton: css({
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
  inlineText: css({
    display: 'inline',
  }),
  checkItemText: css({
    display: 'inline',
    marginTop: 0,
  }),
};

export default styles;

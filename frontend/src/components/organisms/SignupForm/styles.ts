import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
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
};

export default styles;

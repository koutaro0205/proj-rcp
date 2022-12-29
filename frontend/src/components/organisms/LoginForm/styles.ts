import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
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
  inlineText: css({
    display: 'inline',
    textDecoration: 'underline',
    '&:hover': {
      opacity: 0.5,
    },
  }),
  checkItemText: css({
    display: 'inline',
    marginTop: 0,
  }),
};

export default styles;

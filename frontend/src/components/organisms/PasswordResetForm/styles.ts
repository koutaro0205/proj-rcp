import { css } from '@emotion/css';

import { FORM_WIDTH } from '@/common/constants/flatDimention';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    width: FORM_WIDTH.m,
    margin: '0 auto',
  }),
  formContainer: css({
    display: 'block',
    width: '100%',
    marginBottom: space.large,
    marginTop: space.large,
  }),
  submitButton: css({
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
};

export default styles;

import { css } from '@emotion/css';

import { INNER_WIDTH } from '@/common/constants/flatDimention';
import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    width: INNER_WIDTH.m,
    margin: '0 auto',
  }),
  formContainer: css({
    display: 'block',
    width: '100%',
    marginBlock: space.l,
  }),
  submitButton: css({
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
};

export default styles;

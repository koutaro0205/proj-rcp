import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const styles = {
  container: css({
    width: '450px',
    marginTop: space.extraSmall,
    marginButtom: space.extraSmall,
  }),
  content: css({
    height: '34px',
  }),
  searchForm: css({
    width: '100%',
  }),
  searchSubmit: css({
    width: '30%',
    paddingTop: space.extraSmall,
    paddingButtom: space.extraSmall,
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
};

export default styles;

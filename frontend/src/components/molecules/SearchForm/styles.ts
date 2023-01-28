import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

const SEARCH_FORM_WIDTH = '450px';

const styles = {
  container: css({
    width: SEARCH_FORM_WIDTH,
    marginBlock: space.xs,
  }),
  content: css({
    height: '34px',
  }),
  searchForm: css({
    width: '100%',
  }),
  searchSubmit: css({
    width: '30%',
    paddingBlock: space.xs,
    color: colors.black,
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  }),
};

export default styles;

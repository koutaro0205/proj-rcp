import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';
import zIndex from '@/theme/zIndex';

type TransisitonStyles = {
  [key: string]: { opacity: number };
};

// モーダル自体の透明度
export const transitionStyles: TransisitonStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// モーダル背景の透明度
export const transitionBackgroundStyles: TransisitonStyles = {
  entering: { opacity: 0.6 },
  entered: { opacity: 0.6 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const DURATION = 300;
const MODAL_SIZE = '70%';

const styles = {
  container: css({
    display: 'block',
  }),
  imageWrapper: css({
    textAlign: 'right',
    paddingInline: space.m,
    paddingBlock: space.s,
  }),
  modalContainer: css({
    position: 'fixed',
    width: MODAL_SIZE,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: `opacity ${DURATION}ms ease-in-out`,
    zIndex: zIndex.strong,
    backgroundColor: colors.white,
    borderRadius: borderRadius.l,
  }),
  modalContent: css({
    padding: space.l,
  }),
  modalBackground: css({
    backgroundColor: colors.black,
    zIndex: zIndex.strong - 1,
    position: 'fixed',
    transition: `opacity ${DURATION}ms ease-in-out`,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  }),
};

export default styles;

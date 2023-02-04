import Image from 'next/image';
import React from 'react';
import { Transition } from 'react-transition-group';

import { ICONS } from '@/common/constants/icons';

import styles, { transitionStyles, transitionBackgroundStyles } from './styles';

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  closeModal: () => void;
};

const CLOSE_ICON_SIZE = 20;

// FIXME: スクロールできないようにする処理を実装する
const Modal: React.FC<Props> = ({ isOpenModal, closeModal, children }) => {
  return (
    <Transition
      in={isOpenModal}
      timeout={{ enter: 300, exit: 500 }}
      unmountOnExit
    >
      {(state) => (
        <>
          <div
            className={styles.modalContainer}
            style={{ ...transitionStyles[state] }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={ICONS.close}
                width={CLOSE_ICON_SIZE}
                height={CLOSE_ICON_SIZE}
                onClick={closeModal}
              />
            </div>
            <div className={styles.modalContent}>{children}</div>
          </div>
          <div
            className={styles.modalBackground}
            style={{
              ...transitionBackgroundStyles[state],
            }}
          />
        </>
      )}
    </Transition>
  );
};

export default Modal;

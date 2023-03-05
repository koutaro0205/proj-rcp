import React from 'react';
import { Transition } from 'react-transition-group';

import Icon from '@/components/atoms/Icon';

import styles, { transitionStyles, transitionBackgroundStyles } from './styles';

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  closeModal: () => void;
};

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
              <Icon size="s" name="CLOSE" onClick={closeModal} />
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

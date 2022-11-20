import {
  toast,
  Flip,
  ToastTransitionProps,
  ToastPosition,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Toast = {
  position: ToastPosition | undefined;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: string | number | undefined;
  transition: ({
    children,
    position,
    preventExitTransition,
    done,
    nodeRef,
    isIn,
  }: ToastTransitionProps) => JSX.Element;
};

const defaults: Toast = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Flip,
};

export const success = (message: string, options = {}) => {
  toast.success(message, Object.assign(defaults, options));
};

export const info = (message: string, options = {}) => {
  toast.info(message, Object.assign(defaults, options));
};

export const warn = (message: string, options = {}) => {
  toast.warn(message, Object.assign(defaults, options));
};

export const error = (message: string, options = {}) => {
  toast.error(message, Object.assign(defaults, options));
};

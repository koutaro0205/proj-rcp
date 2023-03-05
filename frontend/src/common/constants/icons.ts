import CAMERA from '@public/icons/camera.svg';
import CHECKED from '@public/icons/checked.svg';
import CLOSE from '@public/icons/close.svg';
import DELETE from '@public/icons/delete.svg';
import DIET from '@public/icons/diet.svg';
import DOWN_ARROW from '@public/icons/downArrow.svg';
import FAVORITE from '@public/icons/favorite.svg';
import PLUS from '@public/icons/plus.svg';
import RIGHT_ARROW from '@public/icons/rightArrow.svg';
import TRASH from '@public/icons/trash.svg';
import UNCHECKED from '@public/icons/unchecked.svg';

export const ICONS = {
  FAVORITE,
  CAMERA,
  CHECKED,
  CLOSE,
  DELETE,
  DIET,
  DOWN_ARROW,
  PLUS,
  RIGHT_ARROW,
  TRASH,
  UNCHECKED,
} as const;

export type Icons = keyof typeof ICONS;

import Image from 'next/image';
import React from 'react';

import { getStyles, UserImageSize, getImageSize } from './styles';

const DEFAULT_USER_IMAGE_PATH = '/images/default.jpg';

type Props = {
  imagePath?: string;
  size: UserImageSize;
};

const UserImage: React.FC<Props> = ({
  imagePath = DEFAULT_USER_IMAGE_PATH,
  size,
}) => {
  const style = getStyles(size);
  return (
    <div className={style.imageWrapper}>
      <Image
        src={imagePath}
        className={style.image}
        width={getImageSize(size)}
        height={getImageSize(size)}
      />
    </div>
  );
};

export default UserImage;

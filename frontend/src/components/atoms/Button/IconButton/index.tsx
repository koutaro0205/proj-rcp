import Image from 'next/image';
import React from 'react';

import { ICONS, Icons } from '@/common/constants/icons';
import LinkText from '@/components/atoms/LinkText';
import { Queue } from '@/components/layouts/Queue';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

const DEFAULT_ICON_SIZE = 16;

type Props = {
  label: string;
  path: string;
  icon?: Icons;
  color?: Color;
};

const IconButton: React.FC<Props> = ({
  label,
  path,
  icon,
  color = 'PrimaryColor',
}) => {
  const styles = getStyles(color);
  return (
    <li className={styles.container}>
      {icon && (
        <>
          <Image
            src={ICONS[icon]}
            width={DEFAULT_ICON_SIZE}
            height={DEFAULT_ICON_SIZE}
          />
          <Queue size="xxs" />
        </>
      )}
      <LinkText path={path} size="s">
        {label}
      </LinkText>
    </li>
  );
};

export default IconButton;

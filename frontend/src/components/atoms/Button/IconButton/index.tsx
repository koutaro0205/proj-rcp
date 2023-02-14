import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ICONS, Icons } from '@/common/constants/icons';
import Text from '@/components/atoms/Text';
import { Queue } from '@/components/layouts/Queue';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

const DEFAULT_ICON_SIZE = 16;

type BaseProps = {
  label: string;
  iconName: Icons;
  color?: Color;
};

type ButtonProps = {
  onClick?: () => void;
  path?: never;
} & BaseProps;

type LinkProps = {
  path?: string;
  onClick?: never;
} & BaseProps;

type Props = ButtonProps | LinkProps;

const IconButton: React.FC<Props> = ({
  label,
  path,
  iconName,
  color = 'PrimaryColor',
  onClick,
}) => {
  const styles = getStyles(color);
  const getButtonContent = () => {
    return (
      <span className={styles.content}>
        <Image
          src={ICONS[iconName]}
          alt="アイコン"
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
          className={styles.image}
        />
        <Queue size="xxs" />
        <Text size="s">{label}</Text>
      </span>
    );
  };
  if (path) {
    return (
      <Link href={path}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.linkContainer}>{getButtonContent()}</a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.container}>
      {getButtonContent()}
    </button>
  );
};

export default IconButton;

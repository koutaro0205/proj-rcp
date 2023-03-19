import React from 'react';

import { Icons } from '@/common/constants/icons';
import Icon from '@/components/atoms/Icon';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import { Queue } from '@/components/layouts/Queue';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

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
        <Icon name={iconName} size="xs" />
        <Queue size="xxs" />
        <Text size="s">{label}</Text>
      </span>
    );
  };
  if (path) {
    return (
      <Link href={path} className={styles.linkContainer}>
        {getButtonContent()}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.container} type="button">
      {getButtonContent()}
    </button>
  );
};

export default IconButton;

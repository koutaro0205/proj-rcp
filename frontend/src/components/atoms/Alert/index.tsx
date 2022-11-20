import React from 'react';

import { getAlertStyle, AlertPatterns } from './styles';

type Props = {
  errors: string[];
  petterns: AlertPatterns;
};

const Alert: React.FC<Props> = ({ errors, petterns }) => {
  return (
    <div className={getAlertStyle(petterns)}>
      {errors.length}つの入力内容が正しくありません。
    </div>
  );
};

export default Alert;

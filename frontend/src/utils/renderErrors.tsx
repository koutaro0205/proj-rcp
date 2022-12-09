import React from 'react';

import ValidationErrors from '@/components/molecules/ValidationErrors';
import { isEmptyArray } from '@/utils/match';

type Props = {
  formErrors: string[];
};
// FIXME: ディレクトリ配置未確定のため暫定実装
const renderErrors: React.FC<Props> = ({ formErrors }) => {
  if (isEmptyArray(formErrors)) {
    return null;
  }

  return <ValidationErrors errors={formErrors} petterns="danger" />;
};

export default renderErrors;

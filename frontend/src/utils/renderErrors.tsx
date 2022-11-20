import React from 'react';

import ValidationErrors from '@/components/molecules/ValidationErrors';
import { isEmptyArray } from '@/utils/array';

type Props = {
  formErrors: string[];
};

const renderErrors: React.FC<Props> = ({ formErrors }) => {
  if (isEmptyArray(formErrors)) {
    return null;
  }

  return <ValidationErrors errors={formErrors} petterns="danger" />;
};

export default renderErrors;

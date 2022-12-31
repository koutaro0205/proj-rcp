import { NextPage } from 'next';
import React from 'react';

import EditSection from '@/components/organisms/EditSection';
import EditPasswordSection from '@/components/organisms/EditSection/EditPasswordSection';

const EditUserPasswordPage: NextPage = () => {
  return (
    <EditSection>
      <EditPasswordSection />
    </EditSection>
  );
};

export default EditUserPasswordPage;

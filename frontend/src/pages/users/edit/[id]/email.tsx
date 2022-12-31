import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import EditSection from '@/components/organisms/EditSection';
import EditEmailSection from '@/components/organisms/EditSection/EditEmailSection';
import { selectCurrentUser } from '@/features/currentUser/selecters';

const EditUserEmailPage: NextPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <EditSection>
      <EditEmailSection currentUser={currentUser} />
    </EditSection>
  );
};

export default EditUserEmailPage;

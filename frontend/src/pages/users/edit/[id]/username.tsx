import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import EditSection from '@/components/organisms/EditSection';
import EditUserNameSection from '@/components/organisms/EditSection/EditUserNameSection';
import { selectCurrentUser } from '@/features/currentUser/selecters';

const EditUserNamePage: NextPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <EditSection>
      <EditUserNameSection currentUser={currentUser} />
    </EditSection>
  );
};

export default EditUserNamePage;

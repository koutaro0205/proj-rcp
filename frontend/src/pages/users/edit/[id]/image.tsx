import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import EditSection from '@/components/organisms/EditSection';
import EditUserImageSection from '@/components/organisms/EditSection/EditUserImageSection';
import { selectCurrentUser } from '@/features/currentUser/selecters';

const EditUserImagePage: NextPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <EditSection>
      <EditUserImageSection currentUser={currentUser} />
    </EditSection>
  );
};

export default EditUserImagePage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/currentUser/selecters';

import EditEmailSection from './EditEmailSection';
import EditPasswordSection from './EditPasswordSection';
import EditUserImageSection from './EditUserImageSection';
import EditUserNameSection from './EditUserNameSection';
import LinkTabSection, { Pattern } from './LinkTabSection';

const EditSection: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [pattern, setPattern] = useState<Pattern>('password');
  const getEditSectionPattern = () => {
    switch (pattern) {
      case 'userName':
        return <EditUserNameSection currentUser={currentUser} />;
      case 'password':
        return <EditPasswordSection />;
      case 'email':
        return <EditEmailSection currentUser={currentUser} />;
      case 'userImage':
        return <EditUserImageSection currentUser={currentUser} />;
      default:
        return <EditPasswordSection />;
    }
  };
  return (
    <LinkTabSection setPattern={setPattern}>
      {getEditSectionPattern()}
    </LinkTabSection>
  );
};

export default EditSection;

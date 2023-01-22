import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/currentUser/selecters';
import useGetUserParams from '@/hooks/useGetUserParams';
import updateUser from '@/services/users/updateUser';

import EditEmailSection from './EditEmailSection';
import EditPasswordSection from './EditPasswordSection';
import EditUserImageSection from './EditUserImageSection';
import EditUserNameSection from './EditUserNameSection';
import LinkTabSection, { Pattern } from './LinkTabSection';

const EditSection: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [pattern, setPattern] = useState<Pattern>('userName');
  const { userInfo, formErrors, handleChange, handleFileChange, handleSubmit } =
    useGetUserParams({ pattern: 'update', onSave: updateUser });
  const getEditSectionPattern = () => {
    switch (pattern) {
      case 'userName':
        return (
          <EditUserNameSection
            currentUser={currentUser}
            formErrors={formErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
      case 'password':
        return (
          <EditPasswordSection
            formErrors={formErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        );
      case 'email':
        return (
          <EditEmailSection
            currentUser={currentUser}
            formErrors={formErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
      case 'userImage':
        return (
          <EditUserImageSection
            currentUser={currentUser}
            formErrors={formErrors}
            onChange={handleFileChange}
            onSubmit={handleSubmit}
          />
        );
      default:
        return (
          <EditUserNameSection
            currentUser={currentUser}
            formErrors={formErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
    }
  };
  return (
    <LinkTabSection setPattern={setPattern}>
      {getEditSectionPattern()}
    </LinkTabSection>
  );
};

export default EditSection;

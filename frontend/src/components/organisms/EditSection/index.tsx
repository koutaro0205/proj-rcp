import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/currentUser/selecters';

import EditEmailSection from './EditEmailSection';
import EditPasswordSection from './EditPasswordSection';
import EditUserImageSection from './EditUserImageSection';
import EditUserNameSection from './EditUserNameSection';
import LinkTabSection, { Pattern } from './LinkTabSection';
import { useEditSection } from './useEditSection';

const EditSection: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [pattern, setPattern] = useState<Pattern>('userName');
  const {
    userInfo,
    userNameErrors,
    emailErrors,
    passwordErrors,
    inputRef,
    imageUrl,
    file,
    handleResetFile,
    handleClick,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useEditSection();
  const getEditSectionPattern = () => {
    switch (pattern) {
      case 'userName':
        return (
          <EditUserNameSection
            currentUser={currentUser}
            formErrors={userNameErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
      case 'password':
        return (
          <EditPasswordSection
            formErrors={passwordErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
      case 'email':
        return (
          <EditEmailSection
            currentUser={currentUser}
            formErrors={emailErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            userInfo={userInfo}
          />
        );
      case 'userImage':
        return (
          <EditUserImageSection
            currentUser={currentUser}
            userInfo={userInfo}
            onChange={handleFileChange}
            onSubmit={handleSubmit}
            imageUrl={imageUrl}
            file={file}
            inputRef={inputRef}
            onClickResetFile={handleResetFile}
            onClickUploadFile={handleClick}
          />
        );
      default:
        return (
          <EditUserNameSection
            currentUser={currentUser}
            formErrors={userNameErrors}
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

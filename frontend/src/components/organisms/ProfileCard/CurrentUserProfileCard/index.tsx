import React from 'react';

import SubTitle from '@/components/atoms/Title/SubTitile';
import UserImage from '@/components/atoms/UserImage';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserInfo from '@/components/molecules/UserInfo/CurrentUserInfo';

import styles from './styles';

const CurrentUserProfileCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <SubTitle>現在のユーザー</SubTitle>
      <FlexContainer>
        <UserImage />
        {/* FIXME: Rails APIが用意できたらデータを入れる（postCount） */}
        <CurrentUserInfo userName="カレントユーザー" postCount={0} />
      </FlexContainer>
    </div>
  );
};

export default CurrentUserProfileCard;

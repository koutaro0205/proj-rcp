import React from 'react';

import SubTitle from '@/components/atoms/Title/SubTitile';
import UserImage from '@/components/atoms/UserImage';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserInfo from '@/components/molecules/UserInfo/CurrentUserInfo';
import { CurrentUser } from '@/features/currentUser/type';

import styles from './styles';

type Props = {
  currentUser: CurrentUser;
};

const CurrentUserProfileCard: React.FC<Props> = ({ currentUser }) => {
  return (
    <div className={styles.container}>
      <SubTitle>現在のユーザー</SubTitle>
      <FlexContainer>
        <UserImage size="large" imagePath={currentUser.image_url} />
        {/* FIXME: Rails APIが用意できたらデータを入れる（postCount） */}
        <CurrentUserInfo userName={currentUser.name} postCount={0} />
      </FlexContainer>
    </div>
  );
};

export default CurrentUserProfileCard;

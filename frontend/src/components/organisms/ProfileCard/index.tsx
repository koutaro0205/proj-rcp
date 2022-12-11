import React from 'react';

import { User } from '@/@types/data';
import FollowButton from '@/components/atoms/Button/FollowButton';
import UserImage from '@/components/atoms/UserImage';
import FlexContainer from '@/components/layouts/FlexContainer';
import FollowStatus from '@/components/molecules/FollowStatus';
import CurrentUserInfo from '@/components/molecules/UserInfo/CurrentUserInfo';
import { CurrentUser } from '@/features/currentUser/type';
import { isCurrentUser } from '@/utils/match';

import styles from './styles';

type Props = {
  user: User;
  currentUser: CurrentUser;
};

const ProfileCard: React.FC<Props> = ({ user, currentUser }) => {
  return (
    <div className={styles.container}>
      <FlexContainer>
        <UserImage size="large" />
        {/* FIXME: Rails APIが用意できたらデータを入れる（postCount） */}
        <CurrentUserInfo userName={user.name} postCount={0} />
      </FlexContainer>
      <FollowStatus userId={user.id} />
      {!isCurrentUser(user, currentUser) && (
        <FollowButton followStatus onClick={() => {}} />
      )}
    </div>
  );
};

export default ProfileCard;

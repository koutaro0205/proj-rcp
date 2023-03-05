import React from 'react';

import { FOLLOWING_PATH, FOLLOWERS_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import FollowButton from '@/components/atoms/Button/FollowButton';
import Divider from '@/components/atoms/Divider';
import UserImage from '@/components/atoms/UserImage';
import FlexContainer from '@/components/layouts/FlexContainer';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';
import Status from '@/components/molecules/Status';
import CurrentUserInfo from '@/components/molecules/UserInfo/CurrentUserInfo';
import { CurrentUser } from '@/features/currentUser/type';
import { isCurrentUser } from '@/utils/match';

import styles from './styles';
import useProfileCard from './useProfileCard';

type Props = {
  user: User;
  currentUser: CurrentUser;
};

const ProfileCard: React.FC<Props> = ({ user, currentUser }) => {
  const {
    isFollowing,
    handleClick,
    followerCount,
    followingCount,
    isLoggedIn,
  } = useProfileCard({ user });
  return (
    <div className={styles.container}>
      <FlexContainer>
        <UserImage size="large" />
        {/* FIXME: Rails APIが用意できたらデータを入れる（postCount） */}
        <CurrentUserInfo userName={user.name} postCount={0} />
      </FlexContainer>
      <Stack size="l" />
      <div className={styles.followStatusSection}>
        <Status
          path={FOLLOWING_PATH(user.id)}
          labal="フォロー"
          count={followingCount}
          hasLink={isLoggedIn}
        />
        <Queue size="m" />
        <Divider pattern="vertical" width="s" color="black" />
        <Queue size="m" />
        <Status
          path={FOLLOWERS_PATH(user.id)}
          labal="フォロワー"
          count={followerCount}
          hasLink={isLoggedIn}
        />
      </div>
      <Stack size="l" />
      {currentUser && !isCurrentUser(user, currentUser) && (
        <FollowButton isFollowing={isFollowing} onClick={handleClick} />
      )}
      <Stack size="l" />
    </div>
  );
};

export default ProfileCard;

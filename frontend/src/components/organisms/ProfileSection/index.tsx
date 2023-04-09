import React from 'react';

import { FOLLOWING_PATH, FOLLOWERS_PATH } from '@/common/constants/path';
import { UserProfile } from '@/common/types/data';
import FollowButton from '@/components/atoms/Button/FollowButton';
import Divider from '@/components/atoms/Divider';
import UserImage from '@/components/atoms/UserImage';
import FlexContainer from '@/components/layouts/FlexContainer';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';
import Status from '@/components/molecules/Status';
import CurrentUserInfo from '@/components/organisms/ProfileSection/CurrentUserInfo';
import { CurrentUser } from '@/features/currentUser/type';
import space from '@/theme/space';
import { isCurrentUser } from '@/utils/match';

import styles from './styles';
import useProfileCard from './useProfileSection';

type Props = {
  user: UserProfile;
  currentUser: CurrentUser;
};

const ProfileSection: React.FC<Props> = ({ user, currentUser }) => {
  const {
    isFollowing,
    handleClick,
    followerCount,
    followingCount,
    isLoggedIn,
  } = useProfileCard({ user });
  return (
    <div className={styles.container}>
      <FlexContainer gap={space.m}>
        <UserImage size="large" imagePath={user.image_url} />
        <CurrentUserInfo
          userName={user.name}
          postCount={user.recipes.length || 0}
        />
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

export default ProfileSection;

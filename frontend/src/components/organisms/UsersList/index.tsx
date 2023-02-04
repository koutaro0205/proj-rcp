import React from 'react';

import { User } from '@/@types/data';
import { ITEMS_PER_PAGE } from '@/common/constants/characters';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
import Pagination from '@/components/molecules/Pagination';
import UserItem from '@/components/organisms/UsersList/UserItem';
import { CurrentUser } from '@/features/currentUser/type';
import useGetPaginationData from '@/hooks/useGetPaginationData';

import styles from './styles';
import { useUsersList } from './useUsersList';

type Props = {
  users: User[];
  currentUser: CurrentUser;
  label: string;
};

const UsersList: React.FC<Props> = ({ users, currentUser, label }) => {
  const { handleDeleteUser } = useUsersList();

  const renderUsers = (userArray: User[]) => {
    return userArray.map((user: User) => (
      <UserItem
        key={user.id}
        user={user}
        currentUser={currentUser}
        onClickDelete={() => handleDeleteUser(user.id)}
      />
    ));
  };
  const { slicedData, page } = useGetPaginationData(users);

  return (
    <div className={styles.container}>
      <SubTitle>{label}</SubTitle>
      {slicedData && slicedData.length === 0 ? (
        <Text textAlign="center" lineHeight="xl">
          該当のユーザーはいません。
        </Text>
      ) : (
        <ul>{slicedData && renderUsers(slicedData)}</ul>
      )}
      <div className={styles.paginationWrapper}>
        {users && users.length !== 0 && (
          <Pagination
            totalDataLength={users.length}
            currentPage={page}
            perPage={ITEMS_PER_PAGE}
          />
        )}
      </div>
    </div>
  );
};

export default UsersList;

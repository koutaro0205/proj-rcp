import React from 'react';

import { User } from '@/@types/data';
import SubTitle from '@/components/atoms/SubTitile';
import UserItem from '@/components/molecules/UserItem';
import { CurrentUser } from '@/features/currentUserSlice';

import styles from './styles';

type Props = {
  users: User[];
  currentUser: CurrentUser;
};

const UsersList: React.FC<Props> = ({ users, currentUser }) => {
  const renderUsers = (userArray: User[]) => {
    return userArray.map((user: User) => (
      <UserItem key={user.id} user={user} currentUser={currentUser} />
    ));
  };

  return (
    <div className={styles.container}>
      <SubTitle>登録ユーザー一覧</SubTitle>
      <ul>{users && renderUsers(users)}</ul>

      {/* ページネーションコンポーネントができるまで保留 */}
      {/* <Pagination
        postsPerPage={usersPerPage}
        totalPosts={users.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default UsersList;

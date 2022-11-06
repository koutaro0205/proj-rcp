import { useEffect, useState } from 'react';

import { User } from '@/@types/data';
import getAllUsers from '@/services/users/getAllUsers';

const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return { users, setUsers };
};

export default useGetAllUsers;

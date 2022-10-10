import { NextPage } from "next";
import React from "react";

import { User } from "@/@types/data";
import Layout from "@/components/templates/Layout";
import useGetAllUsers from "@/hooks/users/useGetAllUsers";

const Home: NextPage = () => {
  const { users } = useGetAllUsers();

  return (
    <Layout>
      <div>Hello</div>
      <ul>
        {users?.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

import { NextPage } from "next";
import React from "react";

import { User } from "@/@types/data";
import Layout from "@/components/templates/Layout";
import useGetAllUsers from "@/hooks/users/useGetAllUsers";

const Home: NextPage = () => {
  // const { users } = useGetAllUsers();

  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export default Home;

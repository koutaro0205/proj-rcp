import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { HOME } from '@/common/constants/path';
import Layout from '@/components/templates/Layout';

// FIXME: コンポーネント分けする
const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <div style={{ color: 'red', textAlign: 'center', margin: '100px' }}>
        <p style={{ marginBottom: '30px' }}>404 Not Found</p>
        <Link href={HOME} style={{ textDecoration: 'underline' }}>
          ホームへ戻る
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

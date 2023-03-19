import { NextPage } from 'next';
import React from 'react';

import { HOME } from '@/common/constants/path';
import Link from '@/components/atoms/Link';
import Layout from '@/components/templates/Layout';

// FIXME: コンポーネント分けする
// FIXME: UIを整える（現状、仮の状態）
const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <div style={{ color: 'red', textAlign: 'center', margin: '100px' }}>
        <p style={{ marginBottom: '30px' }}>404 Not Found</p>
        <Link href={HOME}>ホームへ戻る</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

import React, { SetStateAction } from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import SubTitle from '@/components/atoms/Title/SubTitile';
import ColumnWrapper from '@/components/layouts/ColumnWrapper';
import ContextWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import TabItem from '@/components/molecules/TabItem';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';

import styles from './styles';

export type Pattern = 'userName' | 'password' | 'email' | 'userImage';

type Props = {
  children: React.ReactNode;
  setPattern: React.Dispatch<SetStateAction<Pattern>>;
};

const LinkTabSection: React.FC<Props> = ({ children, setPattern }) => {
  return (
    <Layout>
      <ContextWidth>
        <InnerWrapper size="l">
          <SectionTitle sectionTitle="ユーザー編集" />
          <FlexContainer justifyContent="space-between">
            <ColumnWrapper columnWidth="38%">
              <div className={styles.tabsList}>
                <SubTitle>公開情報</SubTitle>
                <TabItem
                  label="プロフィール画像"
                  onClick={() => setPattern('userImage')}
                />
                <TabItem
                  label="ユーザー名"
                  onClick={() => setPattern('userName')}
                />
              </div>
              <div>
                <SubTitle>非公開情報</SubTitle>
                <TabItem
                  label="パスワード"
                  onClick={() => setPattern('password')}
                />
                <TabItem
                  label="メールアドレス"
                  onClick={() => setPattern('email')}
                />
              </div>
            </ColumnWrapper>
            <ColumnWrapper columnWidth="58%">{children}</ColumnWrapper>
          </FlexContainer>
        </InnerWrapper>
      </ContextWidth>
    </Layout>
  );
};

export default LinkTabSection;

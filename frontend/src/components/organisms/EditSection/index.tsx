import React from 'react';
import { useSelector } from 'react-redux';

import {
  USER_EDIT_PASSWORD_PATH,
  USER_EDIT_EMAIL_PATH,
  USER_EDIT_USER_IMAGE_PATH,
  USER_EDIT_USER_NAME_PATH,
} from '@/common/constants/path';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import SubTitle from '@/components/atoms/Title/SubTitile';
import ColumnWrapper from '@/components/layouts/ColumnWrapper';
import ContextWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import TabItem from '@/components/molecules/TabItem';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';
import { selectCurrentUser } from '@/features/currentUser/selecters';

import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const EditSection: React.FC<Props> = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserId = currentUser.id;
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
                  path={USER_EDIT_USER_IMAGE_PATH(currentUserId)}
                />
                <TabItem
                  label="ユーザー名"
                  path={USER_EDIT_USER_NAME_PATH(currentUserId)}
                />
              </div>
              <div>
                <SubTitle>非公開情報</SubTitle>
                <TabItem
                  label="パスワード"
                  path={USER_EDIT_PASSWORD_PATH(currentUserId)}
                />
                <TabItem
                  label="メールアドレス"
                  path={USER_EDIT_EMAIL_PATH(currentUserId)}
                />
              </div>
            </ColumnWrapper>
            <ColumnWrapper columnWidth="57%">{children}</ColumnWrapper>
          </FlexContainer>
        </InnerWrapper>
      </ContextWidth>
    </Layout>
  );
};

export default EditSection;

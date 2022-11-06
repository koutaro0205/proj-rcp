import React from 'react';

import Explanation from '@/components/atoms/Explanation';
import Input from '@/components/atoms/Input';
import InputField from '@/components/atoms/InputField';

import styles from './styles';

export const SearchForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.content}>
          <InputField name="keyword" placeholder="キーワードを入力" />
          <Input text="検索" _styles={styles.searchSubmit} />
        </div>
        <Explanation message="検索したいキーワードを入力してください。" />
      </form>
    </div>
  );
};

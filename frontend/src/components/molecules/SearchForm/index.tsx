import React from 'react';

import Explanation from '@/components/atoms/Explanation';
import InputButton from '@/components/atoms/InputButton';
import SearchField from '@/components/atoms/SearchField';

import styles from './styles';

export const SearchForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.content}>
          <SearchField name="keyword" placeholder="キーワードを入力" />
          <InputButton text="検索" _styles={styles.searchSubmit} />
        </div>
        <Explanation message="検索したいキーワードを入力してください。" />
      </form>
    </div>
  );
};

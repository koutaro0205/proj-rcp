import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import SearchField from '@/components/atoms/TextField/SearchField';

import styles from './styles';

export const SearchForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.content}>
          <SearchField name="keyword" placeholder="キーワードを入力" />
          <InputButton
            type="submit"
            value="検索"
            _styles={styles.searchSubmit}
            pattern="inline"
          />
        </div>
        <Explanation message="検索したいキーワードを入力してください。" />
      </form>
    </div>
  );
};

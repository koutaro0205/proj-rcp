import React from "react";

import styles from "./styles";

export const SearchForm: React.FC = () => {
  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        name="keyword"
        className={styles.searchField}
        placeholder="キーワードを入力"
        // onChange={handleChange}
      />
      <input type="submit" className={styles.searchSubmit} />
      <p className={styles.searchText}>
        検索したいキーワードを入力してください。
      </p>
    </form>
  );
};

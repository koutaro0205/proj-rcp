import React from 'react';

import InputButton from '@/components/atoms/InputButton';
import FormItem from '@/components/molecules/FormItem';

import styles from './styles';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        {/* <form className="form" onSubmit={handleSubmit}> */}
        {/* {renderErrors()} */}

        <FormItem label="メールアドレス" type="text" id="email" name="email" />
        <FormItem
          label="パスワード"
          type="password"
          id="password"
          name="password"
        />

        {/* <label className="checkbox" htmlFor="remember_me">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            // onChange={handleInputChange}
          />
          <span className="remember_me">次回から自動的にログインする</span>
        </label>

        <div className={styles.submitButtonContainer}>
          <InputButton text="ログイン" _styles={styles.submitButton} />
        </div>

        <p className="signup">
          ユーザー登録されていない方は<Link to="/users/new">こちら</Link>
        </p>
        <p className="reset">
          パスワードをお忘れの方は
          <Link to="/password_resets/new">こちら</Link>
        </p> */}
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from 'react';

/* Input属性のtypeによってpasswordの表示・非表示を切り替える単純なHooks */

export const useInputType = () => {
  const [isTypeOfPassword, setIsTypeOfPassword] = useState<boolean>(true);

  const handleClick = () => {
    if (isTypeOfPassword) {
      setIsTypeOfPassword(false);
      return;
    }
    setIsTypeOfPassword(true);
  };

  return {
    isTypeOfPassword,
    handleClick,
  };
};

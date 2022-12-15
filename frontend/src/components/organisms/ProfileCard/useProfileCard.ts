import { useState } from 'react';

const useProfileCard = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);

    // FIXME: フォロー機能のbackend実装を行う
    // // 既にフォローしている場合
    // if (isFollowing) {
    //   // フォローを解除する（deleteリクエスト）
    // }

    // // フォローしていない場合
    // if (!isFollowing) {
    //   // フォローする（postリクエスト）
    // }
  };
  return { isFollowing, handleClick };
};

export default useProfileCard;

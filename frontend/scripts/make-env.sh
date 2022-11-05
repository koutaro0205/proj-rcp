#!/bin/bash -eu

# オプションを取得
## e = envCode
## i = 自分の端末のIPアドレス
## b = Bffのエンドポイント

while getopts "e:b:" option; do
  case $option in
    "e")
      envCode=$OPTARG
      echo "\033[0;35mENVCODE:\033[0;39m" $envCode
    ;;
    "b")
      bff=$OPTARG
      echo "\033[0;35mBFF ENDPOINT:\033[0;39m" $bff
    ;;
  esac
done


if [ $envCode = "local" ]; then
  if [ "$bff" = "local" ]; then
      cat ./env/.env.local | sed "s/NEXT_PUBLIC_API_ENDPOINT=.*/NEXT_PUBLIC_API_ENDPOINT=\"http:\/\/localhost:12340\"/" > ./.env
  else
    cp ./env/.env.local ./.env
  fi
elif [ $envCode = "dev" ]; then
  cp ./env/.env.dev ./.env
elif [ $envCode = "stg" ]; then
  cp ./env/.env.stg ./.env
elif [ $envCode = "prd" ]; then
  cp ./env/.env.prd ./.env
else
  echo "対象のenvCode以外を入力しています"
fi
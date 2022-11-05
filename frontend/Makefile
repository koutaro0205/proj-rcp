# 開発のBFFのAPIでローカル起動
.PHONY: start-dev
start-dev:
	sh ./scripts/make-env.sh -e local -b dev &&\
	yarn run dev

# 開発モードでStorybook起動
.PHONY: sb
sb:
	sh ./scripts/make-env.sh -e local -b local &&\
	yarn storybook

# ビルド
.PHONY: build
build:
	sh ./scripts/make-env.sh -e ${ENVCODE}  &&\
	yarn run build

# Storybookのビルド
.PHONY: storybook
build-storybook:
	sh ./scripts/make-env.sh -e dev -b dev &&\
	yarn run build-storybook -o out

# ESLintチェック
.PHONY: lint
lint:
	yarn run eslint --ext .ts,.tsx,.json,.js,.jsx src/

# 型チェック
.PHONY: tsc
tsc:
	yarn run tsc --noEmit

.PHONY: start build stop test deploy logs client build-docker

CLIENT_NAME   := contributionls/matters2ipfs
CLIENT_DEV_NAME   := contributionls/matters2ipfs-dev


TAG    := $$(git log -1 --pretty=%H)
CLIENT_IMG    := ${CLIENT_NAME}:${TAG}
CLIENT_LATEST := ${CLIENT_NAME}:latest
CLIENT_DEV_LATEST:= ${CLIENT_DEV_NAME}:latest

start:
	docker-compose -f ./docker-compose.development.yml up
start-with-build:
	docker-compose -f ./docker-compose.development.yml up --build
build-docker:
	docker build -t ${CLIENT_LATEST} .
stop:
	docker-compose -f ./docker-compose.development.yml stop
build:
	docker build -f DEV.Dockerfile -t ${CLIENT_DEV_LATEST} . && Docker run -v `pwd`/build:/app/build ${CLIENT_DEV_LATEST} yarn build
deploy:
	export NODE_TLS_REJECT_UNAUTHORIZED='0' && make test && make build && ./scripts/deploy.sh
test:
	docker build -f DEV.Dockerfile -t ${CLIENT_DEV_LATEST} . && Docker run ${CLIENT_DEV_LATEST} yarn test:ci
client:
	docker-compose -f ./docker-compose.development.yml exec client /bin/sh
logs:
	docker-compose -f ./docker-compose.development.yml logs -f
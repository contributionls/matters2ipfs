# Contributing

For the united environment, we use docker for development and deploy.

> If you want to use your local nodejs, take a look at [CONTRIBUTING-WITH-NODE](CONTRIBUTING-WITH-NODE.md)

## Prerequisites

You should install [docker](https://www.docker.com/) in your client.

## Dev

Just run:

```bash
make start
# if you want to stop it, just ctrl+c
# or
make stop
# if you want to rebuild node_modules force run:
make start-with-build

```

Then, it'll watch the file's changes, and auto restart or refresh

The client dev URL is <http://localhost:3000>

## 🔧 Running the tests <a name = "tests"></a>

```bash
make test
```

## Build

```bash
make build
```

## Coding style

We use [prettier](https://prettier.io/) default rule,you should install [vscode prettier format tools](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) fro development.

## Deploy

deploy:

```bash
make deploy
```

The production URL is <https://matters2ipfs.js.org>
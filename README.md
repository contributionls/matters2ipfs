<h3 align="center">Matters2IPFS</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/contributionls/matters2ipfs.svg)](https://github.com/contributionls/matters2ipfs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/contributionls/matters2ipfs.svg)](https://github.com/contributionls/matters2ipfs/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

The tool converts [matters](https://matters.news) URL to [ipfs](https://ipfs.io/) URL.

Convert online: <https://matters2ipfs.js.org>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Submit New Public Gateway](#submit)
- [Generate Automatically Checked Links](#generate)
- [Built Using](#built_using)
- [TODO](TODO.md)
- [Contributing](CONTRIBUTING.md)
- [Authors](#authors)

## 🏁 Getting Started <a name = "getting_started"></a>

1. Open <https://matters2ipfs.js.org> in your browser.
2. Input Matters article's URL, like <https://matters.news/@leungkaichihk/%E9%A6%99%E6%B8%AF%E7%AC%AC%E4%B8%80%E8%AA%B2-%E7%B0%A1%E4%BB%8B%E5%8F%8A%E7%9B%AE%E9%8C%84-zdpuB2J818r8yUSDeZ4vDARrnQ4ut3S2UYjALXHJ16jp25w4P>
3. Click `Convert` Button(**Note: The checked result is base on your local network, so if you use a proxy, the result will base on your proxy.**)
4. Click `Copy` Icon which the  link is online(**Note: The checked result which is online shows that your current network can visit, but Wechat maybe ban the link, so you should test the link first at Wechat if you want to share  Wechat.**)

## 🔗 Generate Automatically Checked Links <a name = "generate"></a>

You can generate automatically checked links by splicing URLs. The URL rule is:

```bash
https://matters2ipfs.js.org/?url={encodeURIComponent(mattersUrl)}
```

## ➕ Submit New Public Gateway <a name = "submit"></a>

If you want submit a new public gateway, you can create a  [new issue](https://github.com/contributionls/matters2ipfs/issues/new) or [new pull request](https://github.com/contributionls/matters2ipfs/pulls). Here is the [public gateways config file](https://github.com/contributionls/matters2ipfs/blob/master/src/public-gateway.js)

## ⛏️ Built Using <a name = "built_using"></a>

- [Docker](https://www.docker.com/) - Development Environment And Production Enviroment
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Create React App](https://github.com/facebook/create-react-app) - Web Framework

## ✍️ Authors <a name = "authors"></a>

- [@contributionls](https://github.com/contributionls) - Idea & Work

See also the list of [contributors](https://github.com/contributionls/matters2ipfs/contributors) who participated in this project.

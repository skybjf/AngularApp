# 简述

使用Bootstrap和Angular框架，并且暂不打算引入Jquery。 [Angular ui Bootstrap](https://github.com/angular-ui/bootstrap)。

# 使用说明

* 机器环境

	确保安装了node，查看node版本 `node -v`，即可知道是否已经安装

* 构建开发环境

	clone仓库之后，直接使用 `npm install` 指令进行node的插件安装，时间可能会比较久，耐心等待，如果需安装不了，请更改国内镜像或者使用 `cnpm` 进行安装。

* 开发说明

	1.  开发文件在app下的dev中，开发时在跟目录下启用 `gulp -watch`，google浏览器中安装 'LiveReload'插件，每次保存会自动刷新页面。
	2.  gulp中配置了sass编译、css压缩，js代码检查混淆压缩（开发阶段不启用混淆压缩），还是配置了node http-server（后期如需其他插件可再添加）。每次使用时，输入 `npm start` 访问8000端口或者 `http-server` 访问8080端口，均可。
	
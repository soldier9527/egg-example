/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577187266806_2403';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: false, // 允许跨域
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks', // 左边写成.html后缀，会自动渲染.html文件
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  // add middleware robot
  config.middleware = [
    'robot',
    'gzip',
  ];
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  }
  // robot's configurations
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};

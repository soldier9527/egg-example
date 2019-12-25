'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/userList', controller.user.userList);
  router.get('/userInfo/:id', controller.user.getUserInfo);
  router.get('/addUser', controller.user.addUserPage);
  router.post('/addUser', controller.user.addUser);

};

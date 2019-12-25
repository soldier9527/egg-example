'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async addUserPage() {
    const { ctx } = this;
    await ctx.render('user/addUser.html', { title: '测试' });
  }
  async addUser() {
    const { ctx } = this;
    console.log(ctx.request.body);
    await ctx.service.user.addUser(ctx.request.body);
    ctx.body = 'success';
    // await ctx.render('user/addUser.html', { title: '测试' });
  }
  async userList() {
    const { ctx } = this;

    const userList = await ctx.service.user.getUserList(ctx.request.body);
    ctx.body = userList;
    // await ctx.render('user/addUser.html', { title: '测试' });
  }
  async getUserInfo() {
    const { ctx } = this;
    const { id } = ctx.params;
    const user = await ctx.service.user.find(id);
    ctx.body = `body: ${JSON.stringify(user)}`;
  }
}

module.exports = LoginController;

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('user', { id: uid });
    return { user };
  }

  async addUser(user) {
    const result = await this.app.mysql.insert('user', { ...user });
    return result;
  }

  async getUserList() {
    const result = await this.app.mysql.select('user');
    return result;
  }

}
module.exports = UserService;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async info(ctx) {
    ctx.body = await this.service.api.checkName(ctx.request.body.username)
  }
}

module.exports = HomeController;
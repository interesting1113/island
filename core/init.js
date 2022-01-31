const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {

  static initCore(app) {
    // 入口方法
    InitManager.app = app
    InitManager.initloadRouters()
    InitManager.loadHttpException()
  }

  static initloadRouters() {
    // path config
    const apiDiredctory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDiredctory, {
      visit: whenWisitModule
    })
    
    function whenWisitModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }

  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager
const { HttpException } = require("../core/http-exception")

const catchError = (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (global.config.environment === 'dev') {
      throw error
    }
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.status
    } else {
      ctx.body = {
        msg: 'we made a mistake',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
    }
  }
}

module.exports = catchError
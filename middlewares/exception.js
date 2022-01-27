const { HttpException } = require("../core/http-exception")

const catchError = (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.status
    }
  }
}

module.exports = catchError
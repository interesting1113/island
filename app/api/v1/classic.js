const Router = require('koa-router')
const router = new Router()

const { HttpException } = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.headers 
  const body = ctx.request.body

  if (!query) {
    const error = new ErrHttpExceptionor('why', 10001, 400)
    // error.requestUrl = `${ctx.method} ${ctx.path}`
    throw error
  }
  ctx.bpdy = {
    key: 'classic'
  }
  throw new Error('API Exception')
})
module.exports = router
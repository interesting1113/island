const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/latest', (ctx, next) => {
  ctx.bpdy = {
    key: 'book'
  }
})
module.exports = router

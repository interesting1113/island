const Router = require('koa-router')
const router = new Router()

const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.headers 
  const body = ctx.request.body

  const c = {
    a: 1,
    b: {
      f: 2,
      e: {
        
      }
    }
  }

  const v = new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id', parsed = false)
  ctx.body = 'success'
})
module.exports = router
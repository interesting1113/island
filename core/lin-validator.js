const validator = require('validator')
const { ParameterException } = require('./http-exception')
const { findMembers } = require('./utils')
const {
  get,
  last,
  set,
  cloneDeep
} = require('loadash')

class LinValidator {
  constructor() {
    this.data = {}
    this.parsed = {}
  }

  _assembleAllParams(ctx) {
    return {
      body: ctx.request.body,
      query: ctx.request.query,
      path: ctx.params,
      header: ctx.request.header
    }
  } 

  get(path, parsed = true) {
    if (parsed) {
      const value = get(this.parsed, path, null)
      if (value == null) {
        const keys = path.split('.')
        const key = last(keys)
        return get(this.parsed.default, key)
      }
      return value
    } else {
      return get(this.data, path)
    }
  }
}
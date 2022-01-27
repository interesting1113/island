class HttpException extends Error {
  constructor(msg = 'server error', errorCode = 10001, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

module.exports = {
  HttpException
}
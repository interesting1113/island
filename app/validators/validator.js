const { Linvalidator, Rule } = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.is = [
      new Rule('isInt', '需要时正整数', {min: 1})
    ]
  }
}

module.exports = {
  PositiveIntegerValidator
}
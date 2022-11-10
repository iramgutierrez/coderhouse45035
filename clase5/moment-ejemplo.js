const moment = require('moment')

const now = moment('2022-01-01')

const tomorrow = moment().add(1, 'days')

console.log(tomorrow.diff(now, 'days'))
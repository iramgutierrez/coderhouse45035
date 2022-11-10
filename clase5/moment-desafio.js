const moment = require('moment')

const today = moment()
const birthDay = moment('06/03/1989', 'MM/DD/YYYY')
const diffYears = today.diff(birthDay, 'years')
const diffDays = today.diff(birthDay, 'days')

const message = `
Hoy es ${today.format('MM/DD/YYYY')}
Nací el ${birthDay.format('MM/DD/YYYY')}
Desde mi nacimiento han pasado ${diffYears} años
Desde mi nacimiento han pasado ${diffDays} dias
`

console.log(message)
const AppPC = require('./AppPC')
const token = 'token'
const pkg = JSON.parse(require('fs').readFileSync('../package.json'))

global.App = new AppPC(token, pkg)

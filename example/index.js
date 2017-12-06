const AppPC = require('../dist/AppPC')
const token = '<mi-token-bot-telegram>'
const pkg = JSON.parse(require('fs').readFileSync('../package.json'))

global.App = new AppPC(token, pkg)

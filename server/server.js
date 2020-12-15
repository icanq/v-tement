const http = require('http')
const app = require('./app.js')
const PORT = process.env.PORT || 4000
const server = http.createServer(app)

server.listen(PORT, _=> console.log('running on port', PORT))
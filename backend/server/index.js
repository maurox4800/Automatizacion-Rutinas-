const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const db = require('./db/conex');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: "*/*" }))
app.use(cors())

const routes_sos = require('./routes/route_basic')
app.use('/rutinas/sos', routes_sos)


// SERVER HTTPS UP => PROD
/* const options = {
  key: fs.readFileSync('./certs/localhost.key'),
  cert: fs.readFileSync('./certs/localhost.crt')
}
const PORT = 54324
const serverHttps = https.createServer(options, app)
serverHttps.listen(PORT, function () {
  console.log(`rutinas sos is running on port: ${PORT} `)
}) */



// SERVER HTTP UP => TEST
app.listen(5002, function (req, res) {
  console.log('SERVER UP http://localhost:5002/')
})

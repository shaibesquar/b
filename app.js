const express = require('express')
const app = express()
const port = process.ev.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port)

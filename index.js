const express = require('express')
const app = express()
const path = require('path');

const port = 3000 || process.env.port

app.use(express.static(__dirname + '/public' ));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), '/index.html')
})

app.listen(port, () => {
    console.log('whooo we on')
})
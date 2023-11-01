const express = require('express')
const app = express()

app.use('/',express.static("webapp/"));

console.log("you server has started on http://localhost:3000")
const portNo = process.env.PORT || 3000;
app.listen(portNo);
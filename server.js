const express = require('express')
const app = express()

const users = [{name : "Name"}]

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000)
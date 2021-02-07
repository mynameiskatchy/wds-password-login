const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

const users = [{name : "Name"}]


// get users
app.get('/users', (req, res) => {
    res.json(users)
})

// create users
app.post('/users', (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password
    }
    users.push(user)
    res.status(201).send()
})

app.listen(3000)
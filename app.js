const express = require('express')
const app = express()

/**
 * List of imported routes
 */
const array_routes = require('./routes/array')

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    // Data type of variable a & b must be number, not string
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

/**
 * Set all routes
 */
app.use("/array", array_routes)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})

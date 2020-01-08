const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get ('/', (req, res)=>{
    //rumus keliling persegi
    var panjang,lebar,keliling
    panjang = 4
    lebar=3
    keliling = (2*panjang)+(2*lebar)
    return res.send(`keliling persegi panjang kamu adalah ${keliling}`)
})

app.post ('/', (req, res)=>{
    //rumus keliling persegi
    var panjang,lebar,keliling
    panjang = parseInt(req.body.panjang)
    lebar = parseInt(req.body.lebar)
    keliling = (2*panjang)+(2*lebar)

    console.log(typeof panjang)
    console.log(typeof lebar)
    console.log(typeof keliling)

    return res.send(`keliling persegi panjang kamu adalah ${keliling}`)
})

app.post ('/kelilinglingkaran', (req, res)=>{
    //rumus keliling lingkaran
    var phi, r, keliling
    phi = 3.14
    r = parseInt(req.body.r)
    keliling = 2*phi*r

    return res.send(`keliling lingkaran kamu adalah ${keliling}`)
})

app.post ('/regresi', (req, res)=>{
    //regresi
    var y, a, b, x, n, regresi
    // n = parseInt(req.body.n)
    x = parseInt(req.body.x)
    y = parseInt(req.body.y)
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    // a = (y*x^2)-(x)*(x*y)/n*(x^2)-x^2
    // b = n(x*y)-(x*y)/n*(x^2)-X^2
    regresi = a+b*x

    return res.send(`regresi x dan y adalah ${regresi}`)
})

app.get ('/abc', (req,res)=>{
    var a, b, c
    a = 1
    b = 2
    c = a+b

    return res.send(`c bernilai ${c}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
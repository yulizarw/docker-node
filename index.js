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








app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
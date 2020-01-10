// berisi file coding yang berada di day 4 folder task
const express = require('express')
const app = express()
const array_urutkan = require("./lib/array-urutkan.js")
const kondisi=require("./lib/kondisi.js")

app.use(express.urlencoded({ extended: true }))

//task1
app.get("/tugas1", (req,res)=>{
    let kata = ["saya", "kamu", "kita", "dia", "mereka"]
    console.log ("sebelum di sortir ", kata)

    let hasil = array_urutkan.urutan_urut(kata)
    console.log("setelah di sortir ", hasil)
    return res.send(hasil)
})

//task 2
app.get("/tugas2",(req,res)=>{
    let kata = ["saya", "kamu", "kita", "dia", "mereka"]
    console.log ("sebelum di sortir ", kata)

    let hasil = array_urutkan.urutan_terbalik(kata)
    console.log("setelah di sortir ", hasil)
    return res.send(hasil)
})

//tugas 3
app.get("/tugas3",(req,res)=>{
    let q = req.query.q
    console.log("First Value ", q)

    let hasil = kondisi.equal(q)
    return res.send(hasil)
})

//tugas4
app.post("/tugas4", (req,res)=>{
    
})





app.listen(3300, ()=>{
    console.log('Mendengarkan port 3300 dan kamu yang sedang dihati')
})
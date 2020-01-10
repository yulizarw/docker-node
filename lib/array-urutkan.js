const urutan_urut = (data) =>{
    return data.sort()
}
const urutan_terbalik = (data) =>{
    let urutan = urutan_urut(data)
    return urutan.reverse()
}


module.exports ={
    urutan_urut,
    urutan_terbalik
}

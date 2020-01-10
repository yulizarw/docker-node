const equal = (input)=>{
    if (input == "good"){
        return "Yes"
    } else {
        return "No"
    }
}

const objek = (name)=>{
    if (name === String) {
        return "data benar"
    } else {
        return "betulkan data anda"
    }
}


module.exports = {
    equal,objek
}
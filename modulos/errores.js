function otraFunction(){
    return seRompe()
}

function seRompe(){
    return 3 + Z
}

function seRompreAsync(cb){
    setTimeout(()=>{
        try{
            return 3 + z
        }catch(err){
            console.error("Error en la funcion async")
            cb(err)
        }
    })
}

try{
    seRompreAsync((err) =>{
        console.log(err.message)
    })
}catch(err){
    console.error("Algo se ha roto")
    console.error(err.message)
    console.log("Pero no pasa nada por que esto sigue")
}
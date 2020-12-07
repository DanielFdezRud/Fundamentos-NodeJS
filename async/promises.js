function hola(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Hola " + nombre)
            resolve(nombre)
        }, 1000)
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Bla Bla Bla...")
            resolve(nombre)
        },1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Adios " + nombre)
            //resolve()
            reject("Hay un error")
        }, 1000)
    })
}


// --

console.log("Iniciando el proces")

hola("Dani")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) =>{
        console.log("Terminando el proces")
    })
    .catch(error => {
        console.error("Ha habido un error:")
        console.error(error)
    })
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
            resolve()
        }, 1000)
    })
}
async function main(){
    let nombre = await hola("Dani")
    await hablar()
    await hablar()
    await adios(nombre)
    console.log("Se terminó")
}

console.log("Comenzó")
main()
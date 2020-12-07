function hola(nombre, miCallback){
    setTimeout(() => {
        console.log("Hola " + nombre)
        miCallback(nombre)
    }, 1000)
}

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log("Bla Bla Bla...")
        callbackHablar()
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log("Adios " + nombre)
        otroCallback()
    }, 1000)
}


function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(() => {
            conversacion(nombre, --veces, callback)
        })
    } else{
        adios(nombre, callback)
    }
}
// --

console.log("Iniciando proceso")
hola("Dani", (nombre) =>{
    conversacion(nombre, 3, () => {
        console.log("Se termino")
    })
})

hola("Dani", (nombre) => {
    hablar(() =>{
        adios(nombre, () =>{
            console.log("Parando proceso")    
        })
    })
});
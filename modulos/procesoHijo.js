//Para ejecutar un proceso de un fichero

const { exec, spawn } = require("child_process")

// exec("node modulos/errores.js", (err, stdout, stderr) => {
//     if (err){
//         console.error(err)
//         return false
//     }

//     console.log(stdout)
// })

//Para ejectuar un proceso de node
let proceso = spawn("ls", ["-la"])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on("data", (dato) => {
    console.log("Murió?")
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on("exit", ()=>{
    console.log("se terminó")
    console.log(proceso.killed)
})
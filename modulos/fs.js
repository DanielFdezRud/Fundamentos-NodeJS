const fs = require("fs")

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    console.log(contenido)
    fs.writeFile(ruta, contenido, (err) =>{
        if (err){
            console.log("No he podido escribir en el archivo")
        }else{
            console.log("Se ha escrito correctamente")
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
}

// leer(__dirname + "/archivo.txt", console.log)
// escribir(__dirname + "/archivoEscrito.txt", "Soy un archivo nuevo", console.log)
// leer(__dirname + "/archivoEscrito.txt", console.log)
borrar(__dirname + "/archivoEscrito.txt", console.log)
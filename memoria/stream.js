const fs = require("fs")
const stream = require("stream")
const util = require("util")

let data = ""

// // Lectura
let readableStream = fs.createReadStream(__dirname + "/input.txt")
readableStream.setEncoding("UTF-8")

readableStream.on("data", (chunk) => {
    data += chunk
})

readableStream.on("end", () => {
    console.log(data)
})

// Escritura
// process.stdout.write("Hola ")
// process.stdout.write("que ")
// process.stdout.write("tal")

const Transform = stream.Transform

class Mayus {
    constructor() {
        Transform.call(this)
    }
    _transform(chunk, codif, cb) {
        chunkMayus = chunk.toString().toUpperCase()
        this.push(chunkMayus)
        cb()
    }
}
util.inherits(Mayus, Transform)


let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)
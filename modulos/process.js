// const process = require("process")

process.on("exit", () => {
    console.log("Ale, el proceso acabó")
    setTimeout(() => {
        console.log("Esto nunca se va a ver")
    }, 0)
})

process.on("beforeExit", () => {
    console.log("Ale, el proceso va a terminar")
})

process.on("uncaughtException", (err, origen) => {
    console.error("Se mamó")
    console.error(err)
})

// functionQueNoExiste()

console.log("Si le error no se recoje esto no saldría")

process.on('')
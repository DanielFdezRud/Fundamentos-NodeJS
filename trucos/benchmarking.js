console.time("Total")
let suma = 0

console.time("bucle")
for (let i = 0; i <1000000000; i++){
    suma++
}
console.timeEnd("bucle")

let suma2 = 0

console.time("bucle2")
for (let j = 0; j <1000000000; j++){
    suma2++
}
console.timeEnd("bucle2")

console.time("Async")
async()
    .then(() => {
        console.timeEnd("Async")
    })

console.timeEnd("Total")

function async(){
    return new Promise((resolve =>{
        setTimeout(()=>{
            console.log("Termina el proceso async")
            resolve()
        })
    }))
}
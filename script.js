console.log("probando")



// javascript es un lenguaje sincrono

let algo = "patata"
console.log(algo)

algo += " y más patatas"
console.log(algo)


// más adelante vamos a ver como estos comportamientos asincronos ocurren naturalmente.
// como replicamos estos comportamientos asincronos

// setTimeout y setInterval

// setTimeout(() => {

//   // agregar el código a ejecuta luego que haya pasado ese tiempo
//   console.log("ejecutando 1 segundo despues") // 3

// }, 1000) // siempre el tiempo en milisegundos. 1000ms => 1 segundo

// setTimeout(() => {

//   console.log("a los 0 segundos") // 2

// }, 0)

console.log("console.log sincrono") // 1

// JS primero ejecuta TODO lo que sea sincrono y despues lanza todas las ejecuciones asincronas.

// existen dos formas de detener un intervalo


// FORMA 1 (más usada)
let count = 0

// let intervalId = setInterval(() => {
//   count++

//   console.log("imprimiento una patata", count)
  
//   if (count === 5) {
//     clearInterval(intervalId) // detiene un intervalo
//   } 

// }, 1000)

// FORMA 2 
// let intervalId = setInterval(() => {

//   console.log("imprimiento intervalo")

// }, 1000)

// setTimeout(() => {
//   console.log("deteniendo el intervalo")
//   clearInterval(intervalId)
// }, 5000)


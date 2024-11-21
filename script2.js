console.log("script 2")

const contenedorNode = document.querySelector("#contenedor")
contenedorNode.style.width = "600px"
contenedorNode.style.height = "300px"
contenedorNode.style.backgroundColor = "darkgray"
contenedorNode.style.position = "relative"


const cuboNode = document.querySelector("#cubo")
cuboNode.style.width = "30px"
cuboNode.style.height = "30px"
cuboNode.style.backgroundColor = "black"
cuboNode.style.position = "absolute"
cuboNode.style.top = "50px"
let posX = 30
cuboNode.style.left = `${posX}px`

// creamos un efecto de animación

let intervalId = setInterval(() => {

  // console.log("ejecutando intervalo")
  // movemos el cubo

  posX += 2
  console.log("posX", posX)
  cuboNode.style.left = `${posX}px`; // actualizar la posición del nodo

  if (posX >= 500) {
    clearInterval(intervalId)
  }

}, 50)



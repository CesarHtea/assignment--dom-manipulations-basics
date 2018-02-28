
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // I do the rest:
  // console.log(answerPTagWithValue.textContent)
  answerPTagWithValue.innerHTML = `${answerPTagWithValue.textContent * 2}`


})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  // console.log(document.querySelector("#color-circle button"))
  circuloAColorear = document.querySelector("#circle-bw")
  console.log(circuloAColorear)
  if (circuloAColorear.style.backgroundColor !== "black") {
    circuloAColorear.style.backgroundColor = "black"  
  } else circuloAColorear.style.backgroundColor = "white"
  
})

miValor = 40
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}

  // entra un click
  // si miValor <= 320 infla el circulo
    // cambiar la propiedad width-height 
    // actualizar miValor a (miValor x 2)
  // si miValor > 320 resetea miValor a 40

circuloAInflar = document.querySelector(".circle-red")

if (miValor < 320) {
  console.log(miValor)
  miValor = miValor * 2
  circuloAInflar.style.width = miValor+"px"
  circuloAInflar.style.height = miValor+"px"
  console.log(circuloAInflar.style.width)
  } else {
    miValor = 40
    circuloAInflar.style.width = miValor+"px"
    circuloAInflar.style.height = miValor+"px"
    console.log(circuloAInflar.style.width)
  }  
 
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  // target a todos los elementos clase ".inactive" querySelectorAll
    // convertir a array el Node List
  // for: a cada inactivo se le modifica el valor de display: none

  listaAModificar = document.querySelectorAll(".inactive")
  console.log(listaAModificar)
  const arrayAModificar = [...listaAModificar]
  console.log(arrayAModificar)
  console.log(arrayAModificar.length)
  for (i = 0 ; i < arrayAModificar.length ; i++) {
    const listItem = arrayAModificar[i]
    listItem.style.display = "none"
  }

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})

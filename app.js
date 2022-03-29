

function askName() {
    var name = prompt("What is your name?")
return askName
}
// askName()   

function random() {
    var random = Math.floor(Math.random() * 10) + 1
    return random
}

function user() {

  var me = 0

  do {

    var me = me + random()

    if (me > 20) {
      break
    }

    var useran = prompt(`Your new number is ${me}. Press "N to stop"`)

  }while ((me <=21) && (useran !="N"))

  return me
}
alert(user())

function computer() {
var comp = 0

do {

    var comp = comp + random()

    alert(`The computers new number is ${comp}.`)

}while (comp <= 16);

return comp
}       
alert(computer())

function compare() {
  
}
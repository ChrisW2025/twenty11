

function askName() {
    var name = prompt("What is your name?")
return askName
}
 
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


function computer() {
var comp = 0

do {

    var comp = comp + random()

    alert(`The computers new number is ${comp}.`)

}while (comp <= 16);

return comp
}       


function compare() {
  var me = user()
  var comp = computer()

  if  ((comp > 20) && (me > 20))  {
    alert("Looks like both you and the computer have lost.")
    counterlosep-push(i)
    counterlosec-push(i)
  }
    else if (comp > 20) {
    alert(`Congratualtions, you have won with a score of ${me}`)
    counterwinp. push (i)
    counterlosec.push(i)
    }
    else if (me > 20) {
    alert( `Sorry you lost, the computer won with a score of ${comp}`)
    counterinc.push(i)
    counterlosep-push(i)
    }
    else if ((me <= 20) && (comp <= 20)) {
      if (me > comp) {
      alert( `Congratualtions, you have won with a score of ${me}}`)
      counterwinp. push (i)
      counterlosec,push(i)
      }
      else if (me < comp) {
      alert(`Sorry you lost, the computer won with a score of ${comp}`)
      counterwinc,push(i)
      counterlosen, push(1)
      }
      else if (me = comp) {x
      alert(`You have both tied with a score of ${me}`)
      }
    }
  }

function master() {
  compare()
  var q = prompt("If you want to play again, press 1. Otherwise, thank you.")
  if (q == "1") {
    compare()
  }
}

askName()
master()  



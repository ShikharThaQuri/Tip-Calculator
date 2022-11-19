
const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")



let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
  const bill = Number(billTotalInput.value)

  const tip = Number(tipInput.value)/100

  const tipAmount = bill * tip

  const total = bill + tipAmount

  const perPersonTotalValue = total / numberOfPeople

  perPersonTotalDiv.innerText = `$${perPersonTotalValue.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeople++

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }

  numberOfPeople--

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billTotalInput.value);

  const tip = Number(tipInput.value) / 100;

  const tipAmount = bill * tip;

  const total = bill + tipAmount;

  const perPersonTotalValue = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${perPersonTotalValue.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople++;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople--;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

// Color Changeing

const all = document.querySelector("#all");
let root = document.querySelector(":root");
getComputedStyle(root).getPropertyValue("--back-color");

const blackButton = () => {
  root.style.setProperty("--back-color", "#7a6c5d");

  all.style.setProperty(
    "background-image",
    "linear-gradient(rgba(9, 2, 3, 0.7), rgba(9, 2, 3, 0.7)),url(one.png)"
  );
  all.style.setProperty("background-position", "center");
};
const brownButton = () => {
  root.style.setProperty(
    "--back-color",
    "linear-gradient(90deg, rgba(65,0,0,1) 20%, rgba(3,52,7,1) 100%)"
  );

  all.style.setProperty(
    "background-image",
    "linear-gradient(rgba(9, 2, 3, 0.7), rgba(9, 2, 3, 0.7)),url(two.jpg)"
  );
  all.style.setProperty("background-position", "bottom");
};
const blueButton = () => {
  root.style.setProperty(
    "--back-color",
    "linear-gradient(rgba(9, 2, 3, 0.7), rgba(9, 2, 3, 0.7)),#70e000"
  );

  all.style.setProperty("background-image", "url(three.jpg)");
  all.style.setProperty("background-position", "top");
};
const orangeButton = () => {
  root.style.setProperty(
    "--back-color",
    "linear-gradient(rgba(9, 2, 3, 0.7), rgba(9, 2, 3, 0.7)),#ff7b00"
  );

  all.style.setProperty("background-image", "url(four.jpg)");
  all.style.setProperty("background-position", "top");
};






//* search section
let moneyInSearchInput = document.getElementById("moneyInSearch");
let moneyInSearchByMonth = document.getElementById("moneyInSearchByMonth");
let moneyInSearchByName = document.getElementById("moneyInSearchByName");
let moneyInSearch = document.getElementById("moneyInSearch");

//*add section
let moneyInNameChild = document.getElementById("moneyInNameChild");
let moneyInDay = document.getElementById("moneyInDay");
let moneyInAmount = document.getElementById("moneyInAmount");
let addMoneyIn = document.getElementById("addMoneyIn");

let MoneyInPageMood = "create";
let tmpMI;

///* make moneyIn data
let moneyInData;
if (localStorage.moneyIn != null) {
  moneyInData = JSON.parse(localStorage.moneyIn);
} else {
  moneyInData = [];
}

addMoneyIn.onclick = () => {
  newMoneyIn = {
    name: moneyInNameChild.value,
    day: moneyInDay.value,
    month: parentName.value,
    money: moneyInAmount.value,
  };
  if (
    moneyInNameChild.value != "" &&
    moneyInDay.value != "" &&
    moneyInAmount.value != ""
  ) {
    if (MoneyInPageMood === "create") {
      moneyInData.push(newMoneyIn);
    } else {
      moneyInData[tmpMI] = newMoneyIn;
      MoneyInPageMood = "create";
      addMoneyIn.innerHTML = "إضافة";
    }
    clearMoneyInData();
  }

  localStorage.setItem("moneyIn", JSON.stringify(moneyInData));
  showMoneyIn();
};

const base_url =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
// console.log(fromCur);
// for (code in countryList) {
//   console.log(code, countryList[code]);
// }

for (let select of dropdowns) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  // console.log(element.value);
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateExchangeRate = async () => {
  let amount = document.querySelector("form input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = 1;
    // console.log(amtVal);
  }
  console.log(fromCur.value);
  console.log(toCur.value);
  const from = fromCur.value.toLowerCase();
  const to = toCur.value.toLowerCase();
  const URL = `${base_url}/${fromCur.value.toLowerCase()}.json`;
  console.log(URL);

  const res = await fetch(URL);
  const data = await res.json();

  const rate = data[from][to];
  // console.log(`${from.toUpperCase()} → ${to.toUpperCase()} = ${rate}`);

  // ✅ Show converted amount too
  const convertedAmount = (amtVal * rate).toFixed(2);
  msg.innerText = `${amtVal} ${fromCur.value} = ${convertedAmount} ${toCur.value}`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  updateExchangeRate();
});
window.addEventListener("load", () => {
  updateExchangeRate();
});

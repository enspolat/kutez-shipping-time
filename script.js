let dateInput = document.getElementById("dateInput");
let selectInput = document.getElementById("selectInput");
let numberInput = document.getElementById("numberInput");

let alert = document.getElementById("alert");
let closeBtn = document.getElementById("closeAlert");
let btn = document.getElementById("button");

let textInfo = document.getElementById("text-info");
let textEstimated = document.getElementById("text-alt");
let textDate = document.getElementById("text-date");
let infoIcon = document.getElementById("infoIcon");
let shippingInfo = document.getElementById("shippingInfo");

btn.addEventListener("click", getPage);
closeBtn.addEventListener("click", closeAlert);

infoIcon.addEventListener("mouseover", displayInfo);
infoIcon.addEventListener("mouseout", removeInfo);



const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

function displayInfo() {
  shippingInfo.style.display = "block";
}
function removeInfo() {
  shippingInfo.style.display = "none";
}



function getPage() {
  if (
    numberInput.value > 100 ||
    numberInput.value == "" ||
    dateInput.value == "" ||
    selectInput.value == ""
  ) {
    alert.style.display = "flex";
  } else {
    textInfo.style.display = "none";
    textEstimated.style.display = "block";
  }
  calculateDate();
}

function calculateDate() {
  let selectValue = selectInput.value;
  let numberValue = numberInput.value;

  if (numberValue < 50 && selectValue == "Cotton") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 2);
    let newDate = dateDay.toDateString();

    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 3);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }

  if (numberValue >= 50 && selectValue == "Cotton") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 3);
    let newDate = dateDay.toDateString();

    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 4);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }

  if (numberValue < 50 && selectValue == "Linen") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 4);
    let newDate = dateDay.toDateString();

    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 5);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }

  if (numberValue >= 50 && selectValue == "Linen") {
    let dateDay = new Date(dateInput.value);
    dateDay.setDate(dateDay.getDate() + 5);
    let newDate = dateDay.toDateString();

    if (newDate.includes("Jul 04") || newDate.includes("Dec 25")) {
      let bonusdateDay = new Date(dateInput.value);
      bonusdateDay.setDate(bonusdateDay.getDate() + 6);
      let bonusnewDate = bonusdateDay.toDateString();
      textDate.innerText = `${bonusnewDate} Because of National Holidays`;
    } else {
      textDate.innerText = `${newDate}`;
    }
  }
}
function closeAlert() {
  alert.style.display = "none";
}

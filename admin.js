var hotsellers = JSON.parse(localStorage.getItem("hotsell")) || [];
var winter = JSON.parse(localStorage.getItem("winters")) || [];
var covidProtection = JSON.parse(localStorage.getItem("covid-19")) || [];
var popularHealth = JSON.parse(localStorage.getItem("popularhealth")) || [];
var topBooked = JSON.parse(localStorage.getItem("topbook")) || [];
var diabetes = JSON.parse(localStorage.getItem("diabetic")) || [];
var women = JSON.parse(localStorage.getItem("womenWell")) || [];
var halfPrice = JSON.parse(localStorage.getItem("halfPriceStore")) || [];
document.querySelector("#adpt").addEventListener("click", addProducts);

function addProducts() {
  var name = document.querySelector("#name").value;
  var mrp = document.querySelector("#mrp").value;
  var sp = document.querySelector("#sp").value;
  var img = document.querySelector("#imgurl").value;

  var inTo1 = document.querySelector("#catinpharma").value;
  var inTo2 = document.querySelector("#addinlabtests").value;

  var obj = {
    name: name,
    mrp: mrp,
    sp: sp,
    img: img,
  };

  if (inTo1 == "hotsellers") {
    hotsellers.push(obj);
    localStorage.setItem("hotsell", JSON.stringify(hotsellers));
  }
  if (inTo1 == "wintercare") {
    winter.push(obj);
    localStorage.setItem("winters", JSON.stringify(winter));
  }
  if (inTo1 == "covidcare") {
    covidProtection.push(obj);
    localStorage.setItem("covid-19", JSON.stringify(covidProtection));
  }
  if (inTo1 == "halfprice") {
    halfPrice.push(obj);
    localStorage.setItem("halfPriceStore", JSON.stringify(halfPrice));
  }

  if (inTo2 == "popular") {
    popularHealth.push(obj);
    localStorage.setItem("popularhealth", JSON.stringify(popularHealth));
  }
  if (inTo2 == "topbooked") {
    topBooked.push(obj);
    localStorage.setItem("topbook", JSON.stringify(topBooked));
  }
  if (inTo2 == "diabetes") {
    diabetes.push(obj);
    localStorage.setItem("diabetic", JSON.stringify(diabetes));
  }

  if (inTo2 == "womenwellness") {
    women.push(obj);
    localStorage.setItem("womenWell", JSON.stringify(women));
  }
}

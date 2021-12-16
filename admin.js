var hotsellers = [];
var winter = [];
var covidProtection = [];
var popularHealth = [];
var topBooked = [];
var diabetes = [];
var women = [];


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
  if (inTo1 == "") {
      continue;
  } else if (inTo1 == "hotsellers") {
    hotsellers.push(obj);
    localStorage.setItem("hotsell", JSON.stringify(hotsellers));
  } else if (inTo1 == "wintercare") {
    winter.push(obj);
    localStorage.setItem("winters", JSON.stringify(winter));
  } else if (inTo1 == "covidcare") {
    covidProtection.push(obj);
    localStorage.setItem("covid-19", JSON.stringify(covidProtection));
    }
    

    if (inTo2 == "") {
        continue;
    } else if (inTo2 == "popular") {
      popularHealth.push(obj);
      localStorage.setItem("popularhealth", JSON.stringify(popularHealth));
    } else if (inTo2 == "topbooked") {
      topBooked.push(obj);
      localStorage.setItem("topbook", JSON.stringify(topBooked));
    } else if (inTo2 == "diabetes") {
      diabetes.push(obj);
      localStorage.setItem("diabetic", JSON.stringify(diabetes));
    }
    else if (inTo2 == "womenwellness"){
        women.push(obj);
        localStorage.setItem("womenWell",JSON.stringify(women))
    }
}

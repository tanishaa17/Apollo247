var data = [
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/sen0373_1.jpg",
    name: "Semi Air Classic Breathable Adults Diaper",
    mrp: "600",
    rs: "354",
    cashback: "18",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/r/e/revive_laundry_sanitizer_1.jpg",
    name: " Revive Laundary Sanitizer 200 milli-liter",
    mrp: "49",
    rs: "12",
    cashback: "1",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/f/s/fsp255_02.jpg",
    name: "Sirona Hygienic Menstrual Cup Wash...",
    mrp: "249",
    rs: "189",
    cashback: "9",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/e/bel0215_1.jpg",
    name: "Bella Classic Maxi Drai Wings Sanitary Pads, 4...",
    mrp: "247",
    rs: "200.07",
    cashback: "10",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/v/y/vya0019.jpg",
    name: "Vyes Kaunch Beej Churna, 100 grams ",
    mrp: "90",
    rs: "63.9",
    cashback: "3",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/k/e/kee0042.jpg",
    name: "Marico’s Travel Protect Surface Disinfectant.",
    mrp: "179",
    rs: "44.75",
    cashback: "2",
  },
];
data.map(function (elem) {
  var divcard = document.createElement("div");
  divcard.setAttribute("class", "hotsellers");
  var image = document.createElement("img");
  image.setAttribute("src", elem.img);
  image.setAttribute("height", "25%");
  image.setAttribute("width", "30%");
  var nam = document.createElement("p");
  nam.textContent = elem.name;
  nam.setAttribute("class", "namecash");
  var hor = document.createElement("hr");
  var mprice = document.createElement("p");
  mprice.textContent = "MRP " + "(" + "RS." + elem.mrp + ")";
  mprice.setAttribute("class", "prc");
  var price = document.createElement("p");
  price.setAttribute("class", "prc");
  price.textContent = "Rs. " + elem.rs;
  var cb = document.createElement("p");
  cb.textContent = "₹" + elem.cashback + " " + "extra Cashback";
  cb.setAttribute("class", "namecash");
  var button = document.createElement("span");
  button.innerHTML = "ADD TO CART";
  button.setAttribute("class", "but");
  button.addEventListener("click", function () {
    seaterof(elem);
  });
  divcard.append(image, nam, hor, mprice, price, cb, button);
  document.getElementById("hotsel").append(divcard);
});

var data2 = [
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/r/dro0197.jpg",
    name: " Dr Organic Aloe Vera Skin Lotion, 200 ml",
    mrp: "809",
    rs: "404",
    cashback: "20",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/r/drv0014_1.jpeg",
    name: " Dr. Vaidya's Giloy Immunity Enhancer, 60",
    mrp: "300",
    rs: "183",
    cashback: "9",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/r/dro0234.jpg",
    name: "Dr Organic Rose Otto Skin Lotion, 200 ml",
    mrp: "799",
    rs: "399.5",
    cashback: "20",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/o/pon0138.jpg",
    name: "Ponds Moisturising Cold Cream, 200 ml",
    mrp: "349",
    rs: "213.9",
    cashback: "11",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/r/dro0214.jpg",
    name: "Dr. Vaidya's Herbofit, 60 Capsules (2x 30)",
    mrp: "895",
    rs: "447.5",
    cashback: "22",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/d/r/drv0008_1_1.jpeg",
    name: "Marico’s Travel Protect Surface Disinfectant.",
    mrp: "360",
    rs: "255.6",
    cashback: "13",
  },
];

data2.map(function (elem) {
  var divcard = document.createElement("div");
  divcard.setAttribute("class", "hotsellers");
  var image = document.createElement("img");
  image.setAttribute("src", elem.img);
  image.setAttribute("height", "25%");
  image.setAttribute("width", "30%");
  var nam = document.createElement("p");
  nam.textContent = elem.name;
  nam.setAttribute("class", "namecash");
  var hor = document.createElement("hr");
  var mprice = document.createElement("p");
  mprice.textContent = "MRP " + "(" + "RS." + elem.mrp + ")";
  mprice.setAttribute("class", "prc");
  var price = document.createElement("p");
  price.setAttribute("class", "prc");
  price.textContent = "Rs. " + elem.rs;
  var cb = document.createElement("p");
  cb.textContent = "₹" + elem.cashback + " " + "extra Cashback";
  cb.setAttribute("class", "namecash");
  var button = document.createElement("span");
  button.innerHTML = "ADD TO CART";
  button.setAttribute("class", "but");
  button.addEventListener("click", function () {
    seaterof(elem);
  });
  divcard.append(image, nam, hor, mprice, price, cb, button);
  document.getElementById("wintercare").append(divcard);
});

var data3 = [
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/w/i/wil0138.jpg",
    name: " Wildcraft Outdoor Face Mask W95 Medium,",
    mrp: "200",
    rs: "79",
    cashback: "4",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/t/r/travel_protect.jpg",
    name: " Marico's Travel Protect Surface Disinfectant..",
    mrp: "179",
    rs: "44.75",
    cashback: "4",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/e/mediker_500ml.jpg",
    name: "Mediker Advansed Hand Sanitizer, 34 ml",
    mrp: "15.1",
    rs: "3.775",
    cashback: "0",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/covidfind_box_1.jpg",
    name: "COVIFIND Covid-19 Antigen Self Test kit, 1",
    mrp: "250",
    rs: "250",
    cashback: "13",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/r/o/romsons_child_mask_front.jpg",
    name: "Romsons N95 Respirator Kare 6 Layer Child Mask..",
    mrp: "50",
    rs: "50",
    cashback: "3",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/e/hea0495_1_.jpg",
    name: "Healthvit Tulsi Drops, 30 milli-liter",
    mrp: "200",
    rs: "120",
    cashback: "6",
  },
];

data3.map(function (elem) {
  var divcard = document.createElement("div");
  divcard.setAttribute("class", "hotsellers");
  var image = document.createElement("img");
  image.setAttribute("src", elem.img);
  image.setAttribute("height", "25%");
  image.setAttribute("width", "30%");
  var nam = document.createElement("p");
  nam.textContent = elem.name;
  nam.setAttribute("class", "namecash");
  var hor = document.createElement("hr");
  var mprice = document.createElement("p");
  mprice.textContent = "MRP " + "(" + "RS." + elem.mrp + ")";
  mprice.setAttribute("class", "prc");
  var price = document.createElement("p");
  price.setAttribute("class", "prc");
  price.textContent = "Rs. " + elem.rs;
  var cb = document.createElement("p");
  cb.textContent = "₹" + elem.cashback + " " + "extra Cashback";
  cb.setAttribute("class", "namecash");
  var button = document.createElement("span");
  button.innerHTML = "ADD TO CART";
  button.setAttribute("class", "but");
  button.addEventListener("click", function () {
    seaterof(elem);
  });
  divcard.append(image, nam, hor, mprice, price, cb, button);
  document.getElementById("covidcare").append(divcard);
});

var data4 = [
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/6/1/61dsvyqdh1l._sl1100_.jpg",
    name: " Sugarlite Sugar, 500gm",
    mrp: "99",
    rs: "49",
    cashback: "2",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/set0154.jpg",
    name: "Set Wet Cool Avatar Deodorant Body Spray,..",
    mrp: "199",
    rs: "99",
    cashback: "5",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/o/bor0039_1_2.jpg",
    name: "Boro Plus Doodh Kesar Body Lotion, 400 ml",
    mrp: "320",
    rs: "160",
    cashback: "8",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210109_173928__front__hand_sanitizer_250ml_1__1.jpg",
    name: "Apollo Life Hand Sanitizer, 250 ml",
    mrp: "125",
    rs: "62",
    cashback: "6",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lit0170_3.jpg",
    name: "Lttles Soft Cleansing Baby Wipes, 80 Count ",
    mrp: "190",
    rs: "195",
    cashback: "5",
  },
  {
    img: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/k/a/kam0050_2.jpg",
    name: "Kamasutra Urge Men Deodorant Spray, 150 ml",
    mrp: "210",
    rs: "105",
    cashback: "5",
  },
];

data4.map(function (elem) {
  var divcard = document.createElement("div");
  divcard.setAttribute("class", "hotsellers");
  var image = document.createElement("img");
  image.setAttribute("src", elem.img);
  image.setAttribute("height", "25%");
  image.setAttribute("width", "30%");
  var nam = document.createElement("p");
  nam.textContent = elem.name;
  nam.setAttribute("class", "namecash");
  var hor = document.createElement("hr");
  var mprice = document.createElement("p");
  mprice.textContent = "MRP " + "(" + "RS." + elem.mrp + ")";
  mprice.setAttribute("class", "prc");
  var price = document.createElement("p");
  price.setAttribute("class", "prc");
  price.textContent = "Rs. " + elem.rs;
  var cb = document.createElement("p");
  cb.textContent = "₹" + elem.cashback + " " + "extra Cashback";
  cb.setAttribute("class", "namecash");
  var button = document.createElement("span");
  button.innerHTML = "ADD TO CART";
  button.setAttribute("class", "but");
  button.addEventListener("click", function () {
    seaterof(elem);
  });
  divcard.append(image, nam, hor, mprice, price, cb, button);
  document.getElementById("halfprice").append(divcard);
});

var addedToCart = JSON.parse(localStorage.getItem("cartItemsadded")) || [];

function seaterof(el) {
  var obj = {
    name: el.name,
    mrp: el.mrp,
    price: el.rs,
    img: el.img,
  };
  addedToCart.push(obj);
  localStorage.setItem("cartItemsadded", JSON.stringify(addedToCart));

  cartCountupdate(addedToCart);
}

function cartCountupdate(addedToCart) {
  document.querySelector("#cartcount").textContent = addedToCart.length;
}

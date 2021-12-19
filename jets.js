var addedToCart = JSON.parse(localStorage.getItem("cartItemsadded")) || [];

distants(addedToCart);

function distants(addedToCart) {
  document.querySelector("#itemscart").innerHTML = "";

  var ctotal = 0;
  var csavings = 0;
  var dcharges = 25;
  var toprice = 0;

  addedToCart.map(function (el, index) {
    var image = document.createElement("img");
    image.setAttribute("src", el.img);

    var name = document.createElement("p");
    name.textContent = el.name;

    var div0 = document.createElement("div");

    div0.append(name);

    var div3 = document.createElement("div");

    var ic = document.createElement("i");
    ic.setAttribute("class", "fas fa-trash-alt");
    ic.addEventListener("click", function () {
      restart(index);
    });

    var mrp = document.createElement("p");
    mrp.textContent = "MRP" + " ₹ " + el.mrp;
    mrp.setAttribute("class", "linethrough");
    ctotal += Number(el.mrp);

    var price = document.createElement("h3");
    price.textContent = " ₹ " + el.price;
    toprice += Number(el.price);

    var savings = el.mrp - el.price;
    csavings += savings;

    var discount = document.createElement("p");
    discount.textContent = "savings" + " ₹ " + savings.toFixed(2);
    discount.setAttribute("class", "smallest");

    div3.append(ic, mrp, price, discount);

    var div5 = document.createElement("div");
    div5.append(image, div0, div3);

    document.querySelector("#itemscart").append(div5);
  });

  document.querySelector("#tprice").textContent = "₹ " + ctotal;
  document.querySelector("#discountprice").textContent =
    "₹ " + csavings.toFixed(2);

  if (Number(toprice) >= 1000) {
    document.querySelector("#toprice").textContent = "₹ " + toprice.toFixed(2);
    document.querySelector("#dvcharge").textContent =
      "₹ " + dcharges.toFixed(2);
    document.querySelector("#dvcharge").style.textDecoration = "line-through";
  } else if (addedToCart.length == 0) {
    document.querySelector("#dvcharge").textContent = "₹  0";
    document.querySelector("#toprice").textContent = "₹  0";
  } else {
    toprice += 25;
    document.querySelector("#toprice").textContent = "₹ " + toprice.toFixed(2);
    document.querySelector("#dvcharge").textContent =
      "₹ " + dcharges.toFixed(2);
    document.querySelector("#dvcharge").style.textDecoration = "none";
  }
}

cartCountupdate(addedToCart);

function cartCountupdate(addedToCart) {
  document.querySelector("#cartcount").textContent = addedToCart.length;
}

function restart(i) {
  addedToCart.splice(i, 1);
  localStorage.setItem("cartItemsadded", JSON.stringify(addedToCart));
  if (addedToCart.length == 0) {
    document.querySelector("#dvcharge").textContent = " ";
    document.querySelector("#toprice").textContent = " ";
  }
  cartCountupdate(addedToCart);
  distants(addedToCart);
}

function cartCountupdate(addedToCart) {
  document.querySelector("#cartcount").textContent = addedToCart.length;
}

document.querySelector("#checkout").addEventListener("click", navtocheck);

function navtocheck() {
  window.location.href = "checkout.html";
}

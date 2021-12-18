var addedToCart = JSON.parse(localStorage.getItem("cartItemsadded")) || [];

distants(addedToCart);

function distants(addedToCart) {
  document.querySelector("#itemscart").innerHTML = "";
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
    mrp.textContent = el.mrp;

    var price = document.createElement("h3");
    price.textContent = el.price;

    var discount = document.createElement("p");
    discount.textContent = "500";

    div3.append(ic, mrp, price, discount);

    var div5 = document.createElement("div");
    div5.append(image, div0, div3);

    document.querySelector("#itemscart").append(div5);
  });
}

cartCountupdate(addedToCart);

function cartCountupdate(addedToCart) {
  document.querySelector("#cartcount").textContent = addedToCart.length;
}

function restart(i) {
  addedToCart.splice(i, 1);
  localStorage.setItem("cartItemsadded", JSON.stringify(addedToCart));
  distants(addedToCart);
}

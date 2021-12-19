document.querySelector("#apolloimage").addEventListener("click", navhome);

function navhome() {
  window.location.href = "home page.html";
}

document.querySelector("#doc").addEventListener("click", navdoc);

function navdoc() {
  window.location.href = "doctors.html";
}

document.querySelector("#pharma").addEventListener("click", navpharma);

function navpharma() {
  window.location.href = "pharmacy.html";
}

document.querySelector("#accountsymbol").addEventListener("click", navlogin);

function navlogin() {
  window.location.href = "cart.html";
}

document.querySelector("#cartsymbol").addEventListener("click", navcart);

function navcart() {
  window.location.href = "cart.html";
}

document.querySelector("#labtest").addEventListener("click", navtocreate);

function navtocreate() {
  window.location.href = "lab test.html";
}

document.querySelector("#covid").addEventListener("click", navtocovidpos);

function navtocovidpos() {
  window.location.href = "corona.html";
}

var addedToCart = JSON.parse(localStorage.getItem("cartItemsadded")) || [];

cartCountupdate(addedToCart);

function cartCountupdate(addedToCart) {
  document.querySelector("#cartcount").textContent = addedToCart.length;
}

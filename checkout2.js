display();

function display() {
  var dvdetails = JSON.parse(localStorage.getItem("deliverydetails"));
  document.querySelector("#clear").textContent = dvdetails.name;
  document.querySelector("#clear1").textContent = dvdetails.address;
  document.querySelector("#clear2").textContent = dvdetails.number;

  var addedToCart = JSON.parse(localStorage.getItem("cartItemsadded"));
  addedToCart = [];

  localStorage.setItem("cartItemsadded", JSON.stringify(addedToCart));
}

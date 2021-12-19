document.querySelector("#proceed").addEventListener("click", navtochecking);

function navtochecking() {
  var name = document.querySelector("#name").value;
  var number = document.querySelector("#number").value;
  var address = document.querySelector("#address").value;

  var dvdetails = {
    name: name,
    number: number,
    address: address,
  };

  localStorage.setItem("deliverydetails", JSON.stringify(dvdetails));
  window.location.href = "checkout2.html";
}

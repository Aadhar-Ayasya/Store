let homeApi = "https://fakestoreapi.com/products";
var categoryKey = "https://fakestoreapi.com/products/category/"

async function getapi(key) {
  debugger

  try {
    const ApiData = await fetch(`${key}`);
    var response = await ApiData.json();
    throw response;
  } catch (error) {
    console.log(error)
  }

  const productstemp = document.getElementById("products-template").innerHTML;
  const productscompile = Handlebars.compile(productstemp);
  const compileddata = productscompile({ data: response });
  const container = document.getElementById("container");
  container.innerHTML = compileddata;



  $(".card").on("click", function () {
    debugger
    let productid = this.id;
    location.href = `product.html?id=${productid}`
  })
}


window.onload = function () {


  debugger;
  const urlParams = new URLSearchParams(window.location.search);
  const objectID = urlParams.get('category');
  if (objectID === "home" || objectID === null) {
    getapi(homeApi);
  } else {
    getapi(categoryKey + objectID);
  }
$(".logo").on("click",function(){
  location.href = `index.html`
})


  $(".category").on("click", function () {
    console.log("calll =")
    getapi(categoryKey + this.value);
    debugger
    let status = document.getElementById("status");
    status.innerText = this.value
  });

  $("#home").on("click", function () {
    getapi(homeApi);
    let status = document.getElementById("status");
    status.innerText = this.value
  });



}
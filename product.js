let key = "https://fakestoreapi.com/products/"
let homeApi = "https://fakestoreapi.com/products";
var categoryKey = "https://fakestoreapi.com/products/category/"

async function getapi(key) {
    debugger
    
    const articleType = await fetch(`${key}`);
    var abc = await articleType.json();
    
    
    console.log(abc);
    
    const productstemp = document.getElementById("products-template").innerHTML;
    const productscompile = Handlebars.compile(productstemp);
    const compileddata = productscompile({ data: abc });
    const container = document.getElementById("container");
    container.innerHTML = compileddata;
    $(".card").on("click",function(){
        debugger
        location.href="product.html"
    })
}

window.onload=function(){
      const urlParams = new URLSearchParams(window.location.search);
      const objectID = urlParams.get('id');

    getapi( key + objectID)

    $(".category").on("click", function () {
        location.href=`index.html?category=${this.value}`
      });
    
      $("#home").on("click", function () {
        location.href=`index.html?category=home`
      });
    
  }
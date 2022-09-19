let prodId = localStorage.getItem("ProductoID");


const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCT_INFO_URL = `https://japceibal.github.io/emercado-api/products/${prodId}.json`;
const PRODUCT_INFO_COMMENTS_URL = `https://japceibal.github.io/emercado-api/products_comments/${prodId}.json`;
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const autos = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const toys ="https://japceibal.github.io/emercado-api/cats_products/102.json";
const muebles ="https://japceibal.github.io/emercado-api/cats_products/103.json";
const herramientas ="https://japceibal.github.io/emercado-api/cats_products/104.json";
const computadoras = "https://japceibal.github.io/emercado-api/cats_products/105.json";;
const vestimenta ="https://japceibal.github.io/emercado-api/cats_products/106.json";
const electrodomésticos ="https://japceibal.github.io/emercado-api/cats_products/107.json";
const deporte ="https://japceibal.github.io/emercado-api/cats_products/108.json";
const celulares ="https://japceibal.github.io/emercado-api/cats_products/109.json";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
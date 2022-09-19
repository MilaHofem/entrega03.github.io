//array donde se cargarán los datos recibidos:

if(localStorage.getItem("nombreUsuario") != null){
    let campoNombre = document.getElementById("usuarioId") //id de nav
    let contenidoCampo = ""; 
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    campoNombre.innerHTML = nombreUsuario;
    
}


let lista_productos = [];

let rangoMin = document.getElementById("rangoMin")
let rangoMax = document.getElementById("rangoMax")
let inputBusqueda = document.getElementById("inputBusqueda")
let botonLimpiar = document.getElementById("botonLimpiar")
let botonFiltrar = document.getElementById("botonFiltrar");
let botonAscendente = document.getElementById("ascendente")
let botonDescendente = document.getElementById("descendente")
let botonRelevancia = document.getElementById("relevancia")

let costoMin = undefined;
let costoMax = undefined;

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM

function guardarIdProd(id) {
    localStorage.setItem("ProductoID", id);
    window.location = "product-info.html"
}

function mostrarLista(array){
    let htmlContentToAppend = "";
    console.log(array);
    for(let i = 0; i < array.length; i++){ 
        let producto = array[i];

        if (((costoMin == undefined) || (costoMin != undefined && parseInt(producto.cost) >= costoMin)) &&
        ((costoMax == undefined) || (costoMax != undefined && parseInt(producto.cost) <= costoMax))){
        
        htmlContentToAppend +=  `
        <div onclick="guardarIdProd(`+ producto.id +`)" +  +"class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ producto.name  +`</h4> 
                        <p> `+ producto.description +`</p> 
                        </div>
                        <small class="text-muted">` + `Precio: ` + producto.cost + ` ` + producto.currency + `</small> 
                        <br>
                        <br>
                        <small class="text-muted">` + `Cantidad vendidos: ` + producto.soldCount + `</small>

                    </div>

                </div>
            </div>
        </div>
        `}
        localStorage.setItem("arrayProductos", JSON.stringify(prodFilt)) //entrega4
        document.getElementById("autos-list-container").innerHTML = htmlContentToAppend; 
    }
}


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/


//entrega 2:




document.addEventListener("DOMContentLoaded", function(e){
    let categoriaId = localStorage.getItem("catID"); 
    let url;
    if (categoriaId == 101){
        url = autos;
    }else if (categoriaId == 102){
    url = toys;
    }else if (categoriaId == 103){
    url = muebles;
    }else if (categoriaId == 104){
    url = herramientas;
    }else if (categoriaId == 105){
    url = computadoras;
    }else if (categoriaId == 106){
    url = vestimenta;
    }else if (categoriaId == 107){
    url = electrodomésticos;
    }else if (categoriaId == 108){
    url = deporte; //cambiar todo por url;
    }else if (categoriaId == 109){
    url = celulares;
    }


    getJSONData(url).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista_productos = resultObj.data.products;
            mostrarLista(lista_productos); //cambie nombre de mostrarListaAutos a mostrarLista
        }
    });

    botonFiltrar.addEventListener("click", function(){
//ingreso valor a las variables, desde el valor de los inputs
    costoMin = rangoMin.value;
    costoMax = rangoMax.value;

    if(costoMin != undefined && costoMin != "" && costoMin >= 0 ){
        costoMin = costoMin;
    }else{
        costoMin = undefined
    }
    if(costoMax != undefined && costoMax != "" && costoMax >= 0 ){
        costoMax = costoMax;
    }else{
        costoMax = undefined
    }

    mostrarLista(lista_productos)

    });

    botonLimpiar.addEventListener("click", function(){
        rangoMax.value = "";
        rangoMin.value = "";

        costoMax = undefined;
        costoMin = undefined;

        mostrarLista(lista_productos);

    });

    botonAscendente.addEventListener("click", function(){
        let prodOrdenado = [];
        let prodParaOrdenar = lista_productos;
        prodOrdenado = prodParaOrdenar.sort(function(a, b){
            return b.cost - a.cost;
        })
        mostrarLista(prodOrdenado);
    });
    botonDescendente.addEventListener("click", function(){
        let prodOrdenado = [];
        let prodParaOrdenar = lista_productos;
        prodOrdenado = prodParaOrdenar.sort(function(a, b){
            return a.cost - b.cost;
        })
        mostrarLista(prodOrdenado);
    });
    botonRelevancia.addEventListener("click", function(){
        let prodOrdenado = [];
        let prodParaOrdenar = lista_productos;
        prodOrdenado = prodParaOrdenar.sort(function(a, b){
            return b.soldCount - a.soldCount
        })
        mostrarLista(prodOrdenado);

    });
}); 


// desafiate


inputBusqueda.addEventListener("keyup", function(e){
    
    let buscador = e.target.value;
    let objBuscados = lista_productos.filter(producto => {
        return producto.name.toLowerCase().includes(buscador) || producto.description.toLowerCase().includes(buscador)
   });

   mostrarLista(objBuscados);

});
// lo unico que no funciona es al filtrar por busqueda, aplicar el filtro de relevancia o costoa la vez, pero lo demas anda ok

//entrega 3: 

function seleccionarItem(){
    let item = document.getElementsByClassName("list-group-item list-group-item-action");
    localStorage.setItem("nombreItem", item);
    
  }

  function redirigir(){
    let item = "product-info.js"
  }

  document.seleccionarItem.addEventListener("click", redirigir)
  



 

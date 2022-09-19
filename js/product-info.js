// entrega 3:


let resultJson = [] //array donde se van a guardar todos los comentarios mas los que se agreguen
let jsonProd;

let info_producto = [];

let com_producto = [];

let comentario_producto = [];


//desafiate:
let comentarios = document.getElementById("coment_info");
let puntaje = document.getElementById("puntaje");
let botonEnviar = document.getElementById("botonEnviarComentario");


if(localStorage.getItem("nombreUsuario") != null){
    let campoNombre = document.getElementById("usuarioId") //id de nav
    let contenidoCampo = ""; 
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    campoNombre.innerHTML = nombreUsuario;
    
}

//entrega 3:

let lista_productos = [];


function mostrarLista(array, arrayComentarios){

    let htmlContentToAppend = "";
    let htmlContentToAppend2 = "";
    
        htmlContentToAppend += `

        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
            
                <div>
                    <div class="d-flex w-100 justify-content-between">
                        <h1 class="mb-1">${array.name}</h1>
                    </div>
                    <hr>
                    <h5 class="mb-1">Precio:</h5> ${array.cost} ${array.currency}
                    <br>
                    <br>
                    <h5 class="mb-1">Descripción:</h5> ${array.description}
                    <br>
                    <br>
                    <h5 class="mb-1">Categoría:</h5>${array.category}
                    <br>
                    <br>
                    <h5 class="mb-1">Cantidad de vendidos:</h5>${array.soldCount}
                    <br>
                    <br>
                </div>
            </divd
            <br>
            <br>
            <br>
            <br>
        </div>
        <div class="div_imagen">
        <h4 class="mb-1">Imágenes ilustrativas:</h4>
        <br>
             <img src="img/prod${prodId}_1.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_2.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_3.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_4.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
        `
        

        for(let i= 0; i < arrayComentarios.length; i++){
            let comentario = arrayComentarios[i];
            let puntaje = "";

            for(let p = 1; p <= comentario.score; p++){
                puntaje += `<span class= "fa fa-star checked"></span>`;
            };
            for(let p = comentario.score+1; p <= 5; p++){
                puntaje += `<span class= "fa fa-star"></span> `;
            };


            htmlContentToAppend2 += `
            <div class="container_comentarios">
            <p><strong>${comentario.user}</strong> escribió:</p>
            <p>${comentario.description} - ${puntaje} <div style="text-align:right"></div></p>
            <p>${comentario.dateTime}</p>

            </div>
            
              
            `

            
        }
            document.getElementById("contenedor-info-producto").innerHTML = htmlContentToAppend;
            comentarios.innerHTML += htmlContentToAppend2;
        }

       


     
        


document.addEventListener("DOMContentLoaded", function(e){


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
       if (resultObj.status === "ok"){
        comentario_producto = resultObj.data;
           
       };
   });

   getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
     info_producto = resultObj.data; //cambio lista productos x info producto, borro el .products. modificamos el array info
     //producto para que sea igual al resultado.data, toma los datos del json y los devuelve en array.
        mostrarLista(info_producto, comentario_producto); 
    };
});
});



//desafiate:





//muestra usuario en comentarios!
const parseRedir = JSON.parse(localStorage.getItem('dataUser'));
let usr = document.getElementById('user');


let score = 1;
let comm = "";

//toma puntaje y guardo
document.getElementById('selecPunt').addEventListener('change', () => {
    score = document.getElementById('selecPunt').value;
})
//toma comentario lo guarda
document.getElementById('comentario_usuario').addEventListener('input', () => {
    comm = document.getElementById('comentario_usuario').value;
})
//boton inserta comentario, en el array agrego un objeto con las propiedades para poder iterar
document.getElementById('botonEnviarComentario').addEventListener('click', () => {
    //fecha para ingreso coment
    let date = new Date();
    let mes = date.getMonth() + 1;
    let dateComp = date.getFullYear() + '-' + mes + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    //creo objeto con los datos ingresados
    let obj = {
        description: comm,
        score: score,
        dateTime: dateComp
    }
    //agrego cometarios al array
    resultJson.push(obj)
    //vuelvo a ejecutar funcion para mostrar comentarios mas los agregados
    showComent(resultJson)
    //elimino contenido del input y vuelvo selector de score a 1
    document.getElementById('comentario_usuario').value = "";
    document.getElementById('selecPunt').value = 1;

    //muestro mensaje al enviar comentario y luego de temporizador lo elimino
    document.getElementById('messageComment').innerHTML = "Gracias por su comentario!!";
    const deleteMessage = () => { document.getElementById('messageComment').innerHTML = "" };
    setTimeout(deleteMessage, 2500);
})







//activado para related:


getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
    if (result.status === "ok") {
        resultJson = result.data;
    }
    showComent(resultJson);
});

//muestra usuario en comentarios!
const parse = JSON.parse(localStorage.getItem('dataUser'));
let user = document.getElementById('user');



/* const showComent = (par) => {
    comentarios.innerHTML = `<hr><h3>Comentarios:</h3><br>`;
    for (let i of par) {
        let star = "";
        for (let x = 1; x <= i.score; x++) {//agrego las estrellas naranjas en base a la puntuacion
            star += `<span class="fa fa-star checked"></span> `
        }
        let calc = 5 - i.score;
        if (calc > 0) {//aqui agrego las estrellas vacias diferenciando la puntuacion con 5
            for (let u = 1; u <= calc; u++) {
                star += `<span class="fa fa-star"></span>`
            }
        }
        comentarios.innerHTML +=
            `      <div class="mb-3 col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ i.user + `</h4>
                            <div>
                            `+ star + `
                            </div>
                        </div>
                        <p class="mb-1">` + i.description + `<small> ` + i.dateTime + `</small></p>
                        </div>`;
    }
} */








let punt = 1;
let coment = "";

document.getElementById('selecPunt').addEventListener('change', () => {
    punt = document.getElementById('selecPunt').value;
})
//toma comentario lo guarda
document.getElementById('comentario_usuario').addEventListener('input', () => {
    coment = document.getElementById('comentario_usuario').value;
})
//boton inserta comentario, en el array agrego un objeto con las propiedades para poder iterar
document.getElementById('botonEnviarComentario').addEventListener('click', () => {
    //fecha para ingreso coment
    let date = new Date();
    let mes = date.getMonth() + 1;
    let dateComp = date.getFullYear() + '-' + mes + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    //creo objeto con los datos ingresados
    let obj = {
        description: coment,
        score: punt,
        user: parseRedir[0].user,
        dateTime: dateComp
    }
    //agrego cometarios al array
    resultJson.push(obj)
    //vuelvo a ejecutar funcion para mostrar comentarios mas los agregados
    showComent(resultJson)
    //elimino contenido del input y vuelvo selector de score a 1
    document.getElementById('coment').value = "";
    document.getElementById('punt').value = 1;

    //muestro mensaje al enviar comentario y luego de temporizador lo elimino
    document.getElementById('messageComment').innerHTML = "Gracias por su comentario!";
    const deleteMessage = () => { document.getElementById('messageComment').innerHTML = "" };
    setTimeout(deleteMessage, 2500);
}) 







const relatedProducts = (param) => {
    const arrayProdRel = JSON.parse(localStorage.getItem('arrayProductos'));
    let prodRelInput = document.getElementById('putCarousel');
    prodRelInput.innerHTML = "";
    let cont;
    for (let i of param.relatedProducts) {
        cont = i - 1;
        if (prodRelInput.innerHTML === "") {
            prodRelInput.innerHTML +=
                `<div class="carousel-item active">
                    <a href='#' style= color:white>
                    <img src="`+ arrayProdRel[cont].imgSrc + `" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class='linksRelatedProd'>`+ arrayProdRel[cont].name + ` - ` + arrayProdRel[cont].currency + ` ` + arrayProdRel[cont].cost + `</h5>
                    <p class='linksRelatedProd'>`+ arrayProdRel[cont].description + `</p>
                </div>
                    </a>
                </div>`
        } else {
            prodRelInput.innerHTML +=
                `<div class="carousel-item">
                    <a href='#' style= color:white>
                    <img src="`+ arrayProdRel[cont].imgSrc + `" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class='linksRelatedProd'>`+ arrayProdRel[cont].name + ` - ` + arrayProdRel[cont].currency + ` ` + arrayProdRel[cont].cost + `</h5>
                    <p class='linksRelatedProd'>`+ arrayProdRel[cont].description + `</p>
                </div>
                    </a>
                </div>` }
    }


}
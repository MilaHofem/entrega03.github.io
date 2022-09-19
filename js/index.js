//entrega 2: 

if(localStorage.getItem("nombreUsuario") != null){
    let campoNombre = document.getElementById("usuarioId") //id de nav
    let contenidoCampo = ""; 
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    campoNombre.innerHTML = nombreUsuario;
    
}


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});



document.getElementById("iderroremail").style.display="none";
document.getElementById("iderrorcontrasena").style.display="none";

//entrega 2

function guardarUsuario(){
  let nombreUsuario = document.getElementById("idemail").value;
  localStorage.setItem("nombreUsuario", nombreUsuario)
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formlogin").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('idemail').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el email');
      document.getElementById("iderroremail").style.display="";
      return;
    }
    var clave = document.getElementById('idcontrasena').value;
    if (clave.length < 1) {
      alert('La clave no es válida');
      document.getElementById("iderrorcontrasena").style.display="";
      return;
    }
    this.submit();
    guardarUsuario()
  }

// guardar usuario en localstorage





  function handleCredentialResponse(response) {   
    console.log("Encoded JWT ID token: " + response.credential);
    window.location.href="portada.html"
   }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "243567983595-ainu92l3fre0qn4ikfqsid7pkm2giis7.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
      google.accounts.id.prompt(); 
  }

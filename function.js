
function toggleSection(id) {
    var section = document.getElementById(id);
    section.classList.toggle('hidden');
}



const elementoDescarga = document.querySelector('.descargar');


elementoDescarga.addEventListener('click', function() {
 
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.setAttribute('href', 'cv.pdf');
  enlaceDescarga.setAttribute('download', 'cv.pdf');
  
 
  document.body.appendChild(enlaceDescarga);

  enlaceDescarga.click();
  
  document.body.removeChild(enlaceDescarga);
});


let estado = false
const boton = document.getElementById("boton");
const seccion = document.querySelectorAll("section");
const titulo = document.getElementById("titulogral");
const body = document.body;

boton.addEventListener("click", function() {
 
  body.classList.toggle("light");
  titulo.classList.toggle("light");
  estado =!estado

  seccion.forEach(function(parrafo) {
   
    parrafo.classList.toggle("light");
  });

  if (estado===true ) {
    boton.textContent= "MODO CLARO"
  } else {
    boton.textContent = "MODO OSCURO"
  }


});


 
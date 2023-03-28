// Creo las constantes para poder mostrar la fecha actual, obtener el value del input, agregar a un array el value del input y mostrar los value guardados.
const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");

//
function agregarTarea(tarea) {
  const elemento = `<li>
  <input type="checkbox" data="realizado" id="checkbox">
  <p class="texto">${tarea}</p>
  <button data="eliminado" id="botonEliminar">x</button>
</li>`;
  lista.insertAdjacentHTML("beforeend", elemento);
}
 
//
botonAgregar.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
  }
  input.value = "";
});

//
document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea = input.value;
        if(tarea){
            agregarTarea(tarea);
        }
        input.value = "";
    }
})

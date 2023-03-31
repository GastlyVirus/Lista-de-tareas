// Creo las constantes para poder mostrar la fecha actual, obtener el value del input, agregar a un array el value del input y mostrar los value guardados.
const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");
//-----------------------------------------------------------


// Funcion para formar la lista de tareas, una debajo de la otra
function agregarTarea(tarea) {
  const elemento = `<li>
  <input type="checkbox" data="realizado" id="checkbox">
  <p class="texto">${tarea}</p>
  <button data="eliminado" id="botonEliminar">x</button>
</li>`;
// EL método insertAdjacentHTML() de la interfaz Element analiza la cadena de texto introducida como cadena HTML o XML e inserta al árbol DOM los nodos resultantes de dicho análisis en la posición especificada. Este método no re-analiza el elemento sobre el cual se está invocando y por lo tanto no corrompe los elementos ya existentes dentro de dicho elemento. Esto evita el paso adicional de la serialización, haciéndolo mucho más rápido que la manipulación directa con innerHTML.
// 'beforeend': Justo dentro del elemento, después de su último elemento hijo.
  lista.insertAdjacentHTML("beforeend", elemento);
}
//-----------------------------------------------------------


// addEventListener() Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.
botonAgregar.addEventListener("click", () => {
  // La propiedad de value establece o devuelve el valor del atributo de value de un campo de texto. La propiedad de value contiene el valor predeterminado O el valor que ingresa un usuario.
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
  }
  input.value = "";
});
//-----------------------------------------------------------



// addEventListener() Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.
// keyup El evento es iniciado cuando la tecla es soltada.
document.addEventListener('keyup', function(event){
  // La propiedad KeyboardEventde solo lectura de la interfaz keydevuelve el valor de la tecla presionada por el usuario, teniendo en cuenta el estado de las teclas modificadoras, así como Shiftla configuración regional y el diseño del teclado.
    if(event.key == 'Enter'){
        const tarea = input.value;
        if(tarea){
            agregarTarea(tarea);
        }
        input.value = "";
    }
})
//-----------------------------------------------------------
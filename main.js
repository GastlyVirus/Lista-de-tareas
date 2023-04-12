const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");
const check = "check";
const uncheck = "uncheck";
const lineThrough = "lineThrough";
let id = 0;

function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) {
    return;
  }

  const REALIZADO = realizado ? check : uncheck;

  const LINE = realizado ? lineThrough : " ";

  const elemento = `<li id="elemento">
  <input class="${REALIZADO}" type="checkbox" data="realizado" id="${id}"></i>
  <p class="${LINE}">${tarea}</p>
  <button data="eliminado" id="${id}">x</button>
  </li>`;

  lista.insertAdjacentHTML("beforeend", elemento);
}

botonAgregar.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
  }
  input.value = " ";
  id++;
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
    }
    input.value = "";
    id++;
  }
});

lista.addEventListener('click', function(event){
  const element = event.target
  const elementData = element.attributes.data.value
  console.log(element);
  console.log(elementData);
})

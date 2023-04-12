const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");
const check = "check";
const uncheck = "uncheck";
const lineThrough = "lineThrough";
let id
let LIST



// const FECHA = new Date();
// fecha.innerHTML = FECHA.toLocaleDateString('es-AR', {weekday:'long', month:'long', day:'numeric'});



function agregarTarea(tarea, id, realizado, eliminado){
  if (eliminado){
    return;
  }
  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : " ";
  const elemento = `<li id="elemento">
  <input class="${REALIZADO}" type="checkbox" data="realizado" id="${id}"></i>
  <p class="text ${LINE}">${tarea}</p>
  <button data="eliminado" id="${id}">x</button>
  </li>`;
  lista.insertAdjacentHTML("beforeend", elemento); //insertará el contenido HTML (elemento) al final de la lista (lista) utilizando el método insertAdjacentHTML() con la posición "beforeend"
}



function tareaRealizada(element){
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);
  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}



function tareaEliminada(element){
  element.parentNode.parentNode.removeChild(element.parentNode)
  LIST[element.id].eliminado = true;
}

botonAgregar.addEventListener("click", ()=>{
  const tarea = input.value;
  if (tarea){
    agregarTarea(tarea, id, false, false)
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    }) 
  }
  localStorage.setItem('TODOLIST', JSON.stringify(LIST))
  input.value = "";
  id++;
});



document.addEventListener("keyup", function(event){
  if (event.key == "Enter"){
    const tarea = input.value;
    if (tarea){
      agregarTarea(tarea, id, false, false);
      LIST.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      })
    }
    localStorage.setItem('TODOLIST', JSON.stringify(LIST))
    input.value = "";
    id++;
  }
});



lista.addEventListener("click", function(event){
  const element = event.target;
  const elementData = element.attributes.data.value;
  if (elementData === "realizado"){
    tareaRealizada(element);
  } else if (elementData === "eliminado"){
    tareaEliminada(element);
  }
  localStorage.setItem('TODOLIST', JSON.stringify(LIST))
});



let data = localStorage.getItem('TODOLIST')
if (data){
  LIST.JSON.parse(data)
  id = LIST.length
  cargarLista(LIST)
}else{
  LIST = []
  id = 0
}



function cargarLista(DATA){
  DATA.forEach(function(i){
    agregarTarea(i.nombre, i.id, i.realizado, i.eliminado)
  })
}
const fecha = document.getElementById("fecha");
const horaElemento = document.getElementById("hora");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");
const check = "check";
const uncheck = "uncheck";
const lineThrough = "lineThrough";
let LIST
let id


// La función obtiene la fecha y hora actual del sistema en formato localizado en español de Argentina y lo establece como contenido HTML de un elemento en el documento HTML. El resultado será una representación formateada de la fecha en el formato especificado.
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-AR', {weekday:'long', month:'long', day:'numeric', year:'numeric'});



// Función para obtener el formato de la hora con ceros a la izquierda
const obtenerFormatoHora = (numero) => {
  return numero < 10 ? "0" + numero : numero;
};
// Función para obtener el formato de las am o pm
const obtenerFormatoAMPM = (hora) => {
  return hora >= 12 ? "pm" : "am";
};
// Función para mostrar la hora en tiempo real
const mostrarHoraEnTiempoReal = () => {
  const fecha = new Date();
  let horas = fecha.getHours();
  const minutos = obtenerFormatoHora(fecha.getMinutes());
  const segundos = obtenerFormatoHora(fecha.getSeconds());
  const ampm = obtenerFormatoAMPM(horas);
  // Obtén la hora en formato de 12 horas
  horas = horas % 12 || 12;
  // Actualiza el contenido del elemento div con la hora en tiempo real
  horaElemento.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
};
// Llama a la función mostrarHoraEnTiempoReal cada segundo (1000 ms)
setInterval(mostrarHoraEnTiempoReal, 1000);



function agregarTarea(tarea, id, realizado, eliminado){
  if (eliminado){
    return;
  }
  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : " ";
  const elemento = `<li id="elemento">
  <img src="Imagen/checkIcon.png" class="checkIcon ${REALIZADO}" type="checkbox" data="realizado" id="${id}"/>
  <p class="text ${LINE}">${tarea}</p>
  <img class="trashIcon" src="Imagen/trashIcon.png" data="eliminado" id="${id}"/>
  </li>`;
  lista.insertAdjacentHTML("beforeend", elemento); //insertará el contenido HTML (elemento) al final de la lista (lista) utilizando el método insertAdjacentHTML() con la posición "beforeend"
}



function tareaRealizada(element){
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);
  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
  console.log(LIST)
  console.log(LIST[element.id])
  console.log(LIST[element.id].realizado)
}



function tareaEliminada(element){
  element.parentNode.parentNode.removeChild(element.parentNode)
  LIST[element.id].eliminado = true;
  console.log(LIST)
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
  id++;
  input.value = "";
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
    console.log(LIST)
  }
});



lista.addEventListener("click", function(event){
  const element = event.target;
  const elementData = element.attributes.data.value;
  console.log(elementData)
  if (elementData == "realizado"){
    tareaRealizada(element);
  } else if (elementData == "eliminado"){
    tareaEliminada(element);
    console.log("elimnado")
  }
  localStorage.setItem('TODOLIST', JSON.stringify(LIST))
});



let data = localStorage.getItem('TODOLIST')
if (data){
  LIST=JSON.parse(data)
  console.log(LIST)
  id = LIST.length
  cargarLista(LIST)
}else{
  LIST = []
  id = 0
}



function cargarLista(array){
  array.forEach(function(item){
    agregarTarea(item.nombre, item.id, item.realizado, item.eliminado)
  })
}
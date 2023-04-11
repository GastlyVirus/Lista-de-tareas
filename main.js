const fecha = document.getElementById("fecha");
const input = document.getElementById("input");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");


function agregarTarea (tarea){
  const elemento = `<li id="elemento">
  <input type="checkbox" data="realizado" id="0"></i>
  <p class="text">${tarea}</p>
  <button data="eliminado" id="0">x</button>
  </li>`

  lista.insertAdjacentHTML("beforeend", elemento)
}

botonAgregar.addEventListener('click', ()=>{
  const tarea = input.value; 
  if(tarea){
    agregarTarea(tarea);
  }
  input.value = " ";
})

document.addEventListener('keyup', function(event){
  if(event.key == 'Enter'){
    const tarea = input.value;
    if 
  }
})
document.getElementById("btnAgregar").addEventListener("click", agregarTarea);

function agregarTarea() {
  const texto = document.getElementById("tarea").value;
  if (texto === "") {
    alert("Escribe algo por favor")
    return
  }
 let nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = texto;
  nuevaTarea.innerHTML = texto + " <button onclick='eliminar(this)'>X</button>";
  document.getElementById("listaTareas").appendChild(nuevaTarea);
  document.getElementById("tarea").value = "";
}

function contarTareas() {
  const lista = document.getElementById("listaTareas");
  return lista.children.length;
}

function marcarTodas() {
  const tareas = document.querySelectorAll("#listaTareas li");
  for (let i = 0; i < tareas.length; i++) {
    tareas[i].classList.add("hecha");
  }
  Alert("Todas las tareas fueron marcadas como hechas");
}

window.agregarTarea = agregarTarea;
window.contarTareas = contarTareas;
window.marcarTodas = marcarTodas;


  

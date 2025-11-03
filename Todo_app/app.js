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





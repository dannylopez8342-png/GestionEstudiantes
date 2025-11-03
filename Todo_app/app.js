document.getElementById('btnAgregar').addEventListener('click', agregarTarea)

function agregarTarea () {
  const texto = document.getElementById('tarea').value
  if (texto === '') {
    alert('Escribe algo por favor')
    return
  }
  const nuevaTarea = document.createElement('li')
  nuevaTarea.textContent = texto
  nuevaTarea.innerHTML = texto + " <button onclick='eliminar(this)'>X</button>"
  document.getElementById('listaTareas').appendChild(nuevaTarea)
  document.getElementById('tarea').value = ''
}

function contarTareas () {
  const lista = document.getElementById('listaTareas')
  return lista.children.length
}

function buscarTarea (texto) {
  const tareas = document.querySelectorAll('#listaTareas li')
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].textContent.toLowerCase().includes(texto.toLowerCase())) {
      return true
    }
  }
  return false
}

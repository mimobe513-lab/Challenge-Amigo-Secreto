// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Crear un elemento li y agregarlo a la lista visible
    const li = document.createElement('li');
    li.textContent = nombre;
    document.getElementById('listaAmigos').appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
}
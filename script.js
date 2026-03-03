// 1. Definición de colores vivos para el fondo
const colors = ["#e7f5ff", "#f3f0ff", "#ebfbee", "#fff5f5", "#fff9db"];
let colorIndex = 0;

// 2. Arreglo de objetos con la información de los integrantes
const members = [
    {
        photo: "Imagenes/oswaldomuniz.jpg",
        name: "Oswaldo Muñiz",
        role: "Estudiante de Ingeniería en Sistemas Computacionales"
    },
    {
        photo: "Imagenes/natanael.jpg",
        name: "Natanael",
        role: "Estudiante de Ingeniería en Sistemas Computacionales"
    }
];

let memberIndex = 0;

// 3. Función para mostrar la hora actual (Tarea extra)
function updateTime() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();
    timeDisplay.textContent = "Hora local: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000); // Se actualiza cada segundo
updateTime(); // Llamada inicial al cargar la página

// 4. Lógica para cambiar el color de fondo
document.getElementById("colorButton").addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

// 5. Lógica para alternar entre integrantes dentro de la misma tarjeta
document.getElementById("switchButton").addEventListener("click", (e) => {
    // Incrementa el índice para pasar al siguiente compañero
    memberIndex = (memberIndex + 1) % members.length;

    // Seleccionamos los elementos del HTML y los actualizamos con los datos del arreglo
    document.getElementById("member-photo").src = members[memberIndex].photo;
    document.getElementById("member-name").textContent = members[memberIndex].name;
    document.getElementById("member-role").textContent = members[memberIndex].role;

    // Cambio dinámico del texto del botón según el integrante actual
    if (memberIndex === 0) {
        e.target.textContent = "Mostrar al siguiente compañero";
    } else {
        e.target.textContent = "Mostrar a Oswaldo";
    }
});
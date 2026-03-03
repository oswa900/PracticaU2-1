const colors = ["#0a0a0a", "#1a0000", "#001a00", "#00001a", "#1a1a00"];
let colorIndex = 0;

const members = [
    { photo: "Imagenes/oswaldomuniz.jpg", desc: "Oswaldo Muñiz" },
    { photo: "Imagenes/natanael.jpg", desc: "Natanael" }
];
let memberIndex = 0;

function updateTime() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();
    timeDisplay.textContent = "Hora local: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000); // Se actualiza cada segundo
updateTime(); // Llamada inicial

document.getElementById("colorButton").addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

document.getElementById("switchButton").addEventListener("click", (e) => {

    memberIndex = (memberIndex + 1) % members.length;

    document.getElementById("member-photo").src = members[memberIndex].photo;
    document.getElementById("member-desc").textContent = members[memberIndex].desc;

    if (memberIndex === 0) {
        e.target.textContent = "Mostrar al compañero";
    } else {
        e.target.textContent = "Mostrar a Jesus";
    }
});
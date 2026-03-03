const bgThemes = ["#f8f9fa", "#eef2ff", "#f0fdf4", "#fff7ed", "#faf5ff"];
let themeIndex = 0;

const teamMembers = [
    {
        photo: "Imagenes/oswaldomuniz.jpg",
        name: "Oswaldo Muñiz",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        status: "Backend Developer",
        color: "#f97316",
        github: "https://github.com/oswa900"
    },
    {
        photo: "Imagenes/natanael.jpg",
        name: "Natanael Barrera",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        status: "Frontend Developer",
        color: "#3b82f6",
        github: "https://github.com/nata23-dev"
    }
];
let memberIndex = 0;

function updateClock() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();
    timeDisplay.innerHTML = `🕒 Hora local: ${now.toLocaleTimeString()}`;
}

function handleSwitch(event) {
    const card = document.getElementById("member-card");
    const photo = document.getElementById("member-photo");
    const name = document.getElementById("member-name");
    const statusBadge = document.getElementById("member-status");
    const githubLink = document.getElementById("member-github");

    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    setTimeout(() => {
        memberIndex = (memberIndex + 1) % teamMembers.length;
        const member = teamMembers[memberIndex];

        photo.src = member.photo;
        name.textContent = member.name;
        statusBadge.textContent = member.status;
        githubLink.href = member.github;

        statusBadge.style.backgroundColor = `${member.color}15`;
        statusBadge.style.color = member.color;

        event.target.innerHTML = memberIndex === 0
            ? "Siguiente compañero ➜"
            : "Ver a Oswaldo ➜";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(updateClock, 1000);
    updateClock();

    document.getElementById("colorButton").addEventListener("click", () => {
        themeIndex = (themeIndex + 1) % bgThemes.length;
        document.body.style.backgroundColor = bgThemes[themeIndex];
    });

    document.getElementById("switchButton").addEventListener("click", handleSwitch);

    const firstBadge = document.getElementById("member-status");
    firstBadge.style.backgroundColor = "#f9731615";
    firstBadge.style.color = "#f97316";
});
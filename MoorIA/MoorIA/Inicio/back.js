const container = document.getElementById('container');
const BtnRegistro = document.getElementById('Registro');
const BtnInicioS = document.getElementById('InicioS');

BtnRegistro.addEventListener('click', () => {
    container.classList.add("active");
});

BtnInicioS.addEventListener('click', () => {
    container.classList.remove("active");
});
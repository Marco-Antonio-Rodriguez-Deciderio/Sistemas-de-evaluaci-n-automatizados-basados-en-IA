// Seleccionamos todos los botones del ojo
const btnAbrirPopup = document.querySelectorAll('.btn-abrir-popup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('popup-overlay');
const btnCerrarPopup = document.getElementById('btn-cerrar-popup');

// Abrir el popup al hacer clic en cualquiera de los botones del ojo
btnAbrirPopup.forEach((btn) => {
    btn.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Cerrar el popup
btnCerrarPopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Cerrar el popup al hacer clic en el overlay
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

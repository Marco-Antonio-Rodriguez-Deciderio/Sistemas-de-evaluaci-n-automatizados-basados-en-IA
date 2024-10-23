const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('activo');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('activo');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td class="${order.status === 'Declinado' ? 'danger' : order.status === 'Pendiente' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

function updateDate() {
    const today = new Date();
    
    // Obtener el día y el mes por separado
    const day = today.getDate();
    const options = { month: 'long' };
    const month = today.toLocaleDateString('es-ES', options); // Formato en español para el mes
    
    // Actualizar el contenido de los elementos
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

// Actualiza la fecha al cargar la página
window.onload = updateDate;

document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('aside .sidebar a');
    const mainContent = document.querySelector('main');
    
    // Guardar el contenido original del Dashboard
    const originalDashboardContent = mainContent.innerHTML;

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remover clase 'active' de todos los links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Añadir clase 'active' al elemento clickeado
            this.classList.add('active');

            // Cambiar el contenido de main según el enlace seleccionado
            const sectionName = this.querySelector('h3').innerText; // Obtener el texto del h3
            updateMainContent(sectionName);
        });
    });

    function updateMainContent(section) {
        // Agregar animación de desvanecimiento
        mainContent.style.opacity = 0;
        setTimeout(() => {
            // Si el usuario selecciona 'Dashboard', restaurar el contenido original
            if (section === 'Dashboard') {
                mainContent.innerHTML = originalDashboardContent;
            } else if (section === 'Users') {
                mainContent.innerHTML = `<h1>Usuarios</h1><p>Lista de usuarios...</p>`;
            } else if (section === 'Reports') {
                window.location.href = '../MoorIA/web/public/entrega_tarea/entTar.html';
            } else {
                mainContent.innerHTML = `<h1>${section}</h1><p>Contenido de ${section}...</p>`;
            }
            // Reaparecer contenido con animación
            mainContent.style.opacity = 1;
        }, 300);
    }
});

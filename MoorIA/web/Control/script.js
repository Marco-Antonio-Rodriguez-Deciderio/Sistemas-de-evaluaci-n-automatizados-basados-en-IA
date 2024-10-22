const numRows = 5; // Cambia este valor según la cantidad de filas deseadas
const numCols = 6; // Cambia este valor según la cantidad de columnas adicionales
const colNames = ['Español', 'Matematicas', 'Quimica', 'Geografia', 'Fisica', 'Etica']; // Nombres de las columnas adicionales

// Agrega los nombres de las columnas dinámicas al encabezado de la tabla
function addDynamicColumnHeaders() {
    const headerRow = document.querySelector('#TablaD thead tr');
    
    colNames.forEach(colName => {
        const th = document.createElement('th');
        th.textContent = colName;
        headerRow.appendChild(th);
    });
}

// Genera la tabla dinámicamente
function generateTable() {
    const tableBody = document.querySelector('#TablaD tbody');

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        
        // Columna "No."
        const noCell = document.createElement('td');
        noCell.textContent = i + 1;
        row.appendChild(noCell);

        // Columna "Numero de Control"
        const controlCell = document.createElement('td');
        controlCell.textContent = `NC-${i + 1}`; // Ejemplo de número de control
        row.appendChild(controlCell);

        // Columna "Nombre"
        const nameCell = document.createElement('td');
        nameCell.textContent = `Nombre ${i + 1}`; // Ejemplo de nombre
        row.appendChild(nameCell);

        // Columnas dinámicas
        for (let j = 0; j < numCols; j++) {
            const colCell = document.createElement('td');
            colCell.textContent = `Calificacion ${j + 1}`; // Ejemplo de valor
            row.appendChild(colCell);
        }

        tableBody.appendChild(row);
    }
}

// Inicializa la tabla
function initTable() {
    addDynamicColumnHeaders(); // Añadir encabezados dinámicos
    generateTable(); // Generar filas
}

// Llama a la función para inicializar la tabla
initTable();

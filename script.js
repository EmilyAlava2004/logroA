 
        const form = document.getElementById('formTarea');
        const tabla = document.getElementById('tablaTareas');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const tarea = document.getElementById('tarea').value;
            const descripcion = document.getElementById('descripcion').value;
            

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${tarea}</td>
                <td>${descripcion}</td>
                <td><span class="badge bg-secondary">No completada</span></td>
                <td>
                    <button class="btn btn-success btn-sm completar">Completada</button>
                    <button class="btn btn-danger btn-sm no-completar">No completada</button>
                </td>
            `;
            tabla.appendChild(fila);

            form.reset();
        });

        tabla.addEventListener('click', function(e) {
            if (e.target.classList.contains('completar')) {
                const estado = e.target.closest('tr').querySelector('td:nth-child(3) span');
                estado.textContent = 'Completada';
                estado.className = 'badge bg-success';
            }
            if (e.target.classList.contains('no-completar')) {
                const estado = e.target.closest('tr').querySelector('td:nth-child(3) span');
                estado.textContent = 'No completada';
                estado.className = 'badge bg-secondary';
            }
        });
        function iraintegrantes() {
            window.location.href = "integrantes.html";
        }
    
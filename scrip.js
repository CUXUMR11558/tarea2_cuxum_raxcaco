let userCount = 1;

document.getElementById('addUser').addEventListener('click', () => {
    userCount++;
    const userForm = document.createElement('div');
    userForm.className = 'user-form';
    userForm.innerHTML = `
        <h3>Usuario ${userCount}</h3>
        <label for="nombre${userCount}">Nombre:</label><br>
        <input type="text" id="nombre${userCount}" name="nombre${userCount}"><br>
        <label for="apellido${userCount}">Apellido:</label><br>
        <input type="text" id="apellido${userCount}" name="apellido${userCount}"><br>
        <label for="dpi${userCount}">DPI:</label><br>
        <input type="text" id="dpi${userCount}" name="dpi${userCount}"><br>
        <label for="edad${userCount}">Edad:</label><br>
        <input type="number" id="edad${userCount}" name="edad${userCount}"><br>
    `;
    document.getElementById('dynamicForm').insertBefore(userForm, document.getElementById('addUser'));
});

document.getElementById('removeUser').addEventListener('click', () => {
    if (userCount > 1) {
        const userForms = document.querySelectorAll('.user-form');
        userForms[userForms.length - 1].remove();
        userCount--;
    }
});

document.getElementById('dynamicForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error');
            allFilled = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (allFilled) {
        document.getElementById('result').innerText = 'Formulario enviado correctamente.';
    } else {
        document.getElementById('result').innerText = 'Por favor, complete todos los campos resaltados.';
    }
});
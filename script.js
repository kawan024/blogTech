const btnTema = document.getElementById('btn-tema');
const body = document.body;

// Verifica se o usuário já havia escolhido o modo escuro antes
if (localStorage.getItem('tema') === 'escuro') {
    body.classList.add('dark-mode');
    btnTema.textContent = '☀️ Modo Claro';
}

// Alterna entre claro e escuro ao clicar no botão
btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
        localStorage.setItem('tema', 'escuro');
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
        localStorage.setItem('tema', 'claro');
    }
});
const nomesDivs = document.querySelectorAll('.nomes');
nomesDivs.forEach(div => {
    div.addEventListener('click', () => {
        // Remove 'ativo' de todas
        nomesDivs.forEach(d => d.classList.remove('ativo'));
        // Adiciona 'ativo' na clicada
        div.classList.add('ativo');
    });
});
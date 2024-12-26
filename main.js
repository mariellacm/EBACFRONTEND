const form = document.getElementById('form-charada');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns, você acertou a charada! O número B é maior que o número A!`

    const mensagemErro = `Você não acertou a charada.`

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');

    const valorA = Number(numeroA.value);
    const valorB = Number(numeroB.value);

    if (valorB > valorA) {
        const containerMensagemSucesso = document.querySelector('.mensagemsucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        const containerMensagemErro = document.querySelector('.mensagemerro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    }
    });











































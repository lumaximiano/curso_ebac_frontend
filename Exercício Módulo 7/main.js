const form = document.getElementById('form-camposnumericos');
const numeroCampoA = document.getElementById('numero-campo-a');
const numeroCampoB = document.getElementById('numero-campo-b');
let formEvalido = false;

function validaNumeros(numeroA, numeroB) {
    return Number(numeroB) > Number(numeroA); // Verifica se Campo B é maior que Campo A
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEvalido = validaNumeros(numeroCampoA.value, numeroCampoB.value);

    if (formEvalido) {
        const mensagemSucesso = `Parabéns! O número do CAMPO B ( ${numeroCampoB.value} ) é maior que o número do CAMPO A ( ${numeroCampoA.value} ).`;
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        document.querySelector('.success-message').style.display = 'block';

        numeroCampoA.value = '';
        numeroCampoB.value = '';
    } else {
        numeroCampoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
});

numeroCampoB.addEventListener('keyup', function(e) {
    formEvalido = validaNumeros(numeroCampoA.value, e.target.value);

    if (!formEvalido) {
        numeroCampoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroCampoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

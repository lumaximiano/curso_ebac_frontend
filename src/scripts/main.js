document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-sorteador');
    const resultadoDiv = document.querySelector('.resultado');
    const resultadoValor = document.getElementById('resultado-valor');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        // Pega o número máximo
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        if (isNaN(numeroMaximo) || numeroMaximo < 2) return;

        // Mostra o container do resultado e inicia a animação de rotação
        resultadoDiv.style.display = 'inline-block';
        resultadoDiv.classList.add('ativo');
        resultadoDiv.classList.remove('finalizado');

        // Inicia o "efeito roleta" — trocando os números rapidamente
        let tempoTotal = 4000; // 4 segundos
        let intervaloTroca = 60; // troca a cada 60ms
        let tempoPassado = 0;

        const intervalo = setInterval(() => {
            let numeroTemp = Math.floor(Math.random() * numeroMaximo) + 1;
            resultadoValor.innerText = numeroTemp;
        }, intervaloTroca);

        // Depois de 4 segundos, para o sorteio e mostra o número final
        setTimeout(() => {
            clearInterval(intervalo);

            // Sorteio real do número final
            let numeroFinal = Math.floor(Math.random() * numeroMaximo) + 1;
            resultadoValor.innerText = numeroFinal;

            // Remove rotação e aplica destaque no resultado
            resultadoDiv.classList.remove('ativo');
            resultadoDiv.classList.add('finalizado');
        }, tempoTotal);
    });
});

$(document).ready(function () {
    const tarefas = [];

    // Ao enviar o formulário
    $('#form-lista-tarefa').on('submit', function (e) {
        e.preventDefault(); // Evita recarregar a página

        const texto = $('#nome-da-tarefa').val().trim(); // Pega o valor do input

        if (!texto) {
            alert('Digite uma tarefa.');
            return;
        }

        if (tarefas.includes(texto)) {
            alert('Essa tarefa já foi adicionada.');
            return;
        }

        tarefas.push(texto); // Adiciona à lista de controle

        // Cria o <li> com o texto dentro de um <span>
        const $li = $('<li></li>'); // Cria o <li>
        const $span = $('<span></span>').text(texto); // Cria o <span> com o texto

        $span.on('click', function () {
            $(this).parent().toggleClass('feita'); // Risca o <li> ao clicar no texto
        });

        $li.append($span).appendTo('#lista-de-tarefas'); // Adiciona o <span> no <li>

        $('#nome-da-tarefa').val(''); // Limpa o input
    });
});

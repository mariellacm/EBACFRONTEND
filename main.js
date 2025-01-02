$(document).ready(function() {
    $('#adicionarTarefa').click(function() {
        var novaTarefa = $('#novaTarefa').val();
        if (novaTarefa !== '') {
            $('#listaTarefas').append('<li>' + novaTarefa + '</li>');
            $('#novaTarefa').val('');
        }
    });

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});
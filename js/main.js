$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules : {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            modelo: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#modelo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})
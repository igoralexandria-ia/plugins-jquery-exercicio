$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    // Máscaras
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

    // Para a validade, considerei apenas os campos de cpf e cep como não obrigatórios, mas sei que são campos importantíssimos para validação de formulários web
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: false
            },
            endereco: {
                required: true
            },
            cep: {
                required: false
            }
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu email válido',
            telefone: 'Insira seu telefone',
            endereco: 'Insira um endereço completo'
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.list-ticket button').click(function () {
        const destino = $('cadastro');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})

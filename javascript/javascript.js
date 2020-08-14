$('.carousel').carousel({
    interval: 8000, //muda de um slide para outro a cada 18 segundos
    pause: false //nao pausa o ciclo do slider quando o cursor do mouse está em cima do slider
})

$('.navbar-nav>li>a').on('click', function(){ //código para quando o usuário clicar em um link do menu, a ul fechar.
    $('.navbar-collapse').collapse('hide');
});

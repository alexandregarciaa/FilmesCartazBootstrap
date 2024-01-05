$(function () {
    $.ajax({
        url: 'https://api.b7web.com.br/cinema/',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('.filmes').html('<div class="col-md-12">Carregando...</div> ')
        },
        success: function (json) {
            var html = '';

            for (let i in json) {
                html += '<div class="col-md-4"><div class="filme"><img src="' + json[i].avatar + ' " /><h6>' + json[i].titulo + '</h6></div></div>'
            }

            $('.filmes').html(html);
        }

    })
});
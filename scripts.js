$(function() {
    var $span = $('span');
    $span.each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        }
    });


    var $paragraphs = $('p');

   
    $paragraphs.each(function(index, element) {
        $(element).append('<button data-tmp="' + index + '">Click me!</button>');
        $(element).children('button').addClass('button');
    });

    var $buttons = $('button'),
        $body = $('body');

 
    $buttons.on('click', function() {
        
        var $dataTmpValue = $(this).attr('data-tmp');

        alert('This is button whit data-tmp='+$(this).attr('data-tmp'));
    });

    var $divButtons = $('div.buttons');

 
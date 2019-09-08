$(document).ready(function () {
    $('#red').css('background-color', 'red');
    // $('.text').css('font-weight','bold').click(function (e) { 
    //     e.preventDefault();
    //     $(this).css('display','none')
    // });
    $('p').click(function () { 
        if(!$(this).hasClass('grande')){
            $(this).addClass('grande');
        }else{
            $(this).removeClass('grande');
        }
    });
    $('[title="google"]').css('background-color','blue').css('color','grey')
    $('[title="youtube"]').css('background-color','red').css('color','white')
});
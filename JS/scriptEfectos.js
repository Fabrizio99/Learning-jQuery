$(document).ready(function () {
    const textos = $('.texto')
    // textos.click(function() { 
    //     $(this).css('background', 'green');
    // });
    // textos.mouseover(function () { 
    //     $(this).css('background', 'red');
    // });
    // textos.mouseout(function () { 
    //     $(this).css('background', 'blue');
    // });

    // textos.hover(function () {
    //         $(this).css('background', 'grey');
    //     }, function () {
    //         $(this).css('background', 'transparent');
    //     }
    // );

    textos.click(function() { 
        $(this).css('background', 'red').css('color','white')
    })
    textos.dblclick(function() {
        $(this).css('background','blue')
    })

    const inputField = $('#inputField')
    inputField.focus(function () {
        $(this).css('border','2px solid green')
    });
    inputField.blur(function () {
        $(this).css('border','1px solid grey')
    })
    $(document).mousemove(function (event) {
        $('body').css('cursor','none')
        $('#mouse').css('display','block').css('top',event.clientY).css('left',event.clientX);
    });
    
    $('#buttonAgregar').click(function () { 
        $('#menu').append(`<li><a href="${$('#input').val()}"></a></li>`);
        reloadLinks()
    });
    reloadLinks()
});
function reloadLinks(){
    $('a').each(function () { 
        $(this).text($(this).attr('href'))
        $(this).attr('target','_blank')
    });
}
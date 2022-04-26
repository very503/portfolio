$(function(){
    //배너1
    var bnrLi = $('.paging>li');
    bnrLi.click(function(){
        bnrLi.removeClass('show');
        $(this).addClass('show');
        var bnrGroupSlide = $(this).index();
        $('.bnrGroup').css({
            marginLeft: bnrGroupSlide * -100 + 'vw'
        });
    });
    var nav = $('.menu');
    nav.find('li>i:eq(1)').css({
        display: 'none'
    });
    nav.find('li>i:eq(2)').click(function(){
        $('.nav_bar').css({
            width: '100vw',
            opacity: '1',
            marginLeft: '10vw'
        });
        $('li>i:eq(2)').css({
            display: 'none'
        });
        $('li>i:eq(1)').css({
            marginTop: '28px',
            display: 'block'
        });
    });
    nav.find('li>i:eq(1)').click(function(){
        $('.nav_bar').css({
            opacity: '0',
            width: '25vw'
        });
        $('li>i:eq(2)').css({
            display: 'block' ,
            marginTop: '28px'
        });
        $('li>i:eq(1)').css({
            display: 'none',
        });
    });
});
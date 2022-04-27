$(function(){
    var i = 0;
    $('.header>.nav>li').last().click(function(){
        $('.mbnav').css('display' , 'block');
    });
     $('.bar>li').first().click(function(){
         $('.mbnav').css('display' , 'none');
    })
    $('.tab>li').click(function(){
        $('.tab>li').removeClass('show');
        $(this).addClass('show');
        var ind = $(this).index();
        $('.artGroup').css('margin-left',ind*-100+'%');
        i=ind;
    });
    $('.ftrTopRight>.nav').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });
});
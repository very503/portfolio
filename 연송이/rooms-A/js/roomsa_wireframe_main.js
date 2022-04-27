$(function(){
    var i = 0;
    $('.header>.nav>li').last().click(function(){
       $('.mbnav').css('display' , 'block');
    });
    $('.bar>li').first().click(function(){
        $('.mbnav').css('display' , 'none');
    })
    // 무한슬라이드 
    var btn = $('.btn');
    // 기초세팅
    var artGroup = $('.artGroup');
    artGroup.find('.art:last').prependTo(artGroup);
    artGroup.css({marginLeft : '-100%'});
    // 왼쪽 버튼
    btn.find('.btnLeft').first().click(function(){
        artGroup.stop().animate({
            marginLeft : 0
        },500,function(){
            artGroup.find('.art:last').prependTo(artGroup);
            artGroup.css({marginLeft : '-100%'});
        })
    });
    // 오른쪽 버튼
    btn.find('.btnRight').last().click(function(){
        artGroup.stop().animate({
            marginLeft  : '-200%'
        },500,function(){
            artGroup.find('.art:first').appendTo(artGroup);
            artGroup.css({marginLeft : '-100%' });
        })
    });

    $('.ftrTopRight>.nav').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });
});
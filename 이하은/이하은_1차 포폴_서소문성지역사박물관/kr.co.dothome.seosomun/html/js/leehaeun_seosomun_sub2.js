$(function(){

    // 햄버거탑
    $('div.header>ul.nav>li').eq(5).click(function(){
        $('div.topBox').animate({
            height : '400px'
        },500);
        $(this).css({display : 'none'});
        $('div.header>ul.nav>li').eq(6).css({display : 'block'})        
    });
    $('div.header>ul.nav>li').eq(6).click(function(){
        $('div.topBox').animate({
            height : '0px'
        },500);
        $(this).css({display : 'none'});
        $('div.header>ul.nav>li').eq(5).css({display : 'block'})        
    });

    // 스크롤
    $(window).scroll(function(){
        var wd = $(window).width();
        if(wd > 1024){

        var now = $(this).scrollTop();
        console.log(now);
        if(now >= 100 && now <= 200){
            $('div.content>div.header').addClass('scroll');
        }else if(now >= 200 && now <= 800){
            $('div.content>div.section').addClass('scroll');
        }else if(now >= 800 && now <= 1400){
            $('div.bnrWrap').addClass('scroll');
        }else{
            $('div.ftrWrap').addClass('scroll');
            
        };
    };
        
    });

});
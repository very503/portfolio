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
            $('div.cntWrap>div.content.cnt01>div.header').addClass('scroll');
        }else if(now >= 200 && now <= 900){
            $('div.content.cnt01>div.section>div.artTop').addClass('scroll');
        }else if(now >= 900 && now <= 1400){
            $('div.content.cnt01>div.section>div.artMid').addClass('scroll');
        }else if(now >= 1400 && now <= 1800){
            $('div.content.cnt01>div.section>div.artBtm').addClass('scroll');
        }else if(now >= 1800 && now <= 2350){
            $('div.bnrWrap').addClass('scroll');
        }else if(now >= 2350 && now <= 3100){
            $('div.bnrWrap.bnrWrap02').addClass('scroll');
        }else{
            $('div.ftrWrap').addClass('scroll');
            
        };
    };
        
    });

    // 배너2 맵교체
    $('div.texts>div.txtTop').addClass('on');
    $('div.texts>div.txtTop').click(function(){
        var mapImg = $(this).attr('data-img');
        $(this).addClass('on');
        $('div.texts>div.txtMid').removeClass('on');
        $('div.texts>div.txtBtm').removeClass('on');
        $('div.maps>div.images').css('backgroundImage', mapImg);

    });

    $('div.texts>div.txtMid').click(function(){
        var mapImg = $(this).attr('data-img');
        $(this).addClass('on');
        $('div.texts>div.txtTop').removeClass('on');
        $('div.texts>div.txtBtm').removeClass('on');
        $('div.maps>div.images').css('backgroundImage', mapImg);
    });

    $('div.texts>div.txtBtm').click(function(){
        var mapImg = $(this).attr('data-img');
        $(this).addClass('on');
        $('div.texts>div.txtMid').removeClass('on');
        $('div.texts>div.txtTop').removeClass('on');
        $('div.maps>div.images').css('backgroundImage', mapImg);
    });



});
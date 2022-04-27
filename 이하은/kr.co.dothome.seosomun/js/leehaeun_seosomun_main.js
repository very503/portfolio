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
    



    var i = 0;
    $('div.section>div.btns>i').eq(0).click(function(){
        i--;
        if(i<0){
            i=0;
        };
        console.log(i);
        $('div.artView>div.artGroup').css('margin-left', i * -25 + '%');
        $('div.section>div.bars>div.per').css('margin-left', i * 12.5 + '%');
    });

    $('div.section>div.btns>i').eq(1).click(function(){
        i++;
        if(i > 7){
            i=7;
        };
        $('div.artView>div.artGroup').css('margin-left', i * -25 + '%');
        $('div.section>div.bars>div.per').css('margin-left', i * 12.5 + '%');
    });

    // 스크롤
    $(window).scroll(function(){
        var wd = $(window).width();
        if(wd > 1024){

        var now = $(this).scrollTop();
        console.log(now);
        if(now >= 100 && now <=1200){
            $('div.cntWrap:first').addClass('scroll');
        }else if(now >= 1200 && now <= 2800){
            $('div.cntWrap:eq(1)').addClass('scroll');
        }else if(now >= 2800 && now <= 3700){
            $('div.cntWrap:eq(2)').addClass('scroll');
        }else if(now >= 3700 && now <= 4500){
            $('div.cntWrap:eq(3)').addClass('scroll');
        }else if(now >= 4500 && now <= 5000){
            $('div.cntWrap:eq(4)').addClass('scroll');
        }
        else if(now >= 5000 && now < 5100){
            $('div.bnrWrap:eq(0)').addClass('scroll');
        }else if(now >= 5300 && now < 6200){
            $('div.bnrWrap:eq(1)').addClass('scroll');
        }else{
            $('div.ftrWrap').addClass('scroll');
        };

        if(now >= 1800 && now <= 2100){
            $('div.cntWrap:eq(1)').addClass('cnton');
        };
    };
        
    });
});


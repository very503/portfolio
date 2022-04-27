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

    
    // 아트탑
    var i = 0;
    var button = $('.btns.i1>i');
    var thumb = $('.thumbnail.i1');

    // 아트탑


    $('div.artTop>ul.bar>li').eq(0).addClass('on');
    button.first().click(function(){
        i--;
        if(i<=0){
            i=0;
        };
        thumb.animate({
            marginLeft : i*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');
    });

    button.last().click(function(){
        i++;
        if(i>=2){
            i=2;
        };
        thumb.animate({
            marginLeft : i*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');   
    });




    // $('div.artTop>ul.bar>li').eq(0).addClass('on');
    // button.first().click(function(){
    //     i--;
    //     if(i<=0){
    //         i=0;
    //     };
    //     thumb.css('marginLeft', i*-100 + '%');
    //     $('div.artTop>ul.bar>li').removeClass('on');
    //     $('div.artTop>ul.bar>li').eq(i).addClass('on');
            
    //     });
    
    // button.last().click(function(){
    //     i++;
    //     if(i>=2){
    //         i=2;
    //     };
    //     thumb.css('marginLeft', i*-100 + '%');
    //     $('div.artTop>ul.bar>li').removeClass('on');
    //     $('div.artTop>ul.bar>li').eq(i).addClass('on');
    

    // });



    $('div.artTop>ul.bar>li').click(function(){
        var ind1 = $(this).index();
        thumb.css('marginLeft', ind1 *-100 + '%');
        i=ind1;
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');
    });




    // 아트미드
    var j = 0;
    var button2 = $('.btns.i2>i');
    var thumb2 = $('.thumbnail.i2');


    $('div.artMid>ul.bar>li').eq(0).addClass('on2');
    button2.first().click(function(){
        j--;
        if(j<=0){
            j=0;
        };
        thumb2.animate({
            marginLeft : j*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');
    });

    button2.last().click(function(){
        j++;
        if(j>=2){
            j=2;
        };
        thumb2.animate({
            marginLeft : j*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');   
    });


    // $('div.artMid>ul.bar>li').eq(0).addClass('on2');
    // button2.first().click(function(){
    //     j--;
    //     if(j<=0){
    //         j=0;
    //     };
    //     thumb2.css('marginLeft', j*-100 + '%');
    //     $('div.artMid>ul.bar>li').removeClass('on2');
    //     $('div.artMid>ul.bar>li').eq(j).addClass('on2');
            
    //     });
    
    // button2.last().click(function(){
    //     j++;
    //     if(j>=2){
    //         j=2;
    //     };
    //     thumb2.css('marginLeft', j*-100 + '%');
    //     $('div.artMid>ul.bar>li').removeClass('on2');
    //     $('div.artMid>ul.bar>li').eq(j).addClass('on2');
    

    // });

    $('div.artMid>ul.bar>li').click(function(){
        var ind2 = $(this).index();
        thumb2.css('marginLeft', ind2 *-100 + '%');
        j=ind2;
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');
    });







    // 아트바텀

    var k = 0;
    var button3 = $('.btns.i3>i');
    var thumb3 = $('.thumbnail.i3');

    $('div.artBtm>ul.bar>li').eq(0).addClass('on3');
    button3.first().click(function(){
        k--;
        if(k<=0){
            k=0;
        };
        thumb3.animate({
            marginLeft : k*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
    });

    button3.last().click(function(){
        k++;
        if(k>=1){
            k=1;
        };
        thumb3.animate({
            marginLeft : k*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');   
    });

    // $('div.artBtm>ul.bar>li').eq(0).addClass('on3');
    // button3.first().click(function(){
    //     k--;
    //     if(k<=0){
    //         k=0;
    //     };
    //     thumb3.css('marginLeft', k*-100 + '%');
    //     $('div.artBtm>ul.bar>li').removeClass('on3');
    //     $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
            
    //     });
    
    // button3.last().click(function(){
    //     k++;
    //     if(k>=1){
    //         k=1;
    //     };
    //     thumb3.css('marginLeft', k*-100 + '%');
    //     $('div.artBtm>ul.bar>li').removeClass('on3');
    //     $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
    

    // });

    $('div.artBtm>ul.bar>li').click(function(){
        var ind3 = $(this).index();
        thumb3.css('marginLeft', ind3 *-100 + '%');
        k=ind3;
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
    });


    // 스크롤
    $(window).scroll(function(){
        var wd = $(window).width();
        if(wd > 1024){

        var now = $(this).scrollTop();
        console.log(now);
        if(now >= 100 && now <= 550){
            $('div.content>div.header').addClass('scroll');
        }else if(now >= 550 && now <= 1300){
            $('div.content>div.section>div.artTop').addClass('scroll');
        }else if(now >= 1300 && now <= 2100){
            $('div.content>div.section>div.artMid').addClass('scroll');
        }else if(now >= 2100 && now <= 2800){
            $('div.content>div.section>div.artBtm').addClass('scroll');
        }else if(now >= 2800 && now <= 3200){
            $('div.bnrWrap').addClass('scroll');
        }else{
            $('div.ftrWrap').addClass('scroll');
        };
    };
        
    });








    // // artTop 슬라이드 (무한루프)
    // thumb.find('.article:nth-child(10)~div.article').prependTo(thumb);
    // thumb.css({marginLeft : '-100%'});

    // button.first().click(function(){
    //     if(thumb.css({marginLeft : '-100%'})){
    //         $('div.artTop>div.bar>div.leftTab').css({backgroundColor : '#8893a8'})
            
    //     }

       
    //     thumb.animate({
    //         marginLeft : '0%'
    //     },700, function(){
    //         thumb.find('.article:nth-child(10)~div.article').prependTo(thumb);
    //         thumb.css({marginLeft : '-100%'});
    //     });

    // });

    // button.last().click(function(){
    //     thumb.animate({
    //         marginLeft : '-200%'
    //     },700, function(){
    //         thumb.find('.article:nth-child(-n+5)').appendTo(thumb);
    //         thumb.css({marginLeft : '-100%'});
    //     });
    // });



    // artMid 슬라이드
    // var thumb2 = $('.thumbnail.i2');
    // var button2 = $('.btns.i2>i');

    // thumb2.find('.article:nth-child(10)~div.article').prependTo(thumb2);
    // thumb2.css({marginLeft : '-100%'});

    // button2.first().click(function(){
    //     thumb2.animate({
    //         marginLeft : '0%'
    //     },700, function(){
    //         thumb2.find('.article:nth-child(10)~div.article').prependTo(thumb2);
    //         thumb2.css({marginLeft : '-100%'});
    //     });

    // });

    // button2.last().click(function(){
    //     thumb2.animate({
    //         marginLeft : '-200%'
    //     },700, function(){
    //         thumb2.find('.article:nth-child(-n+5)').appendTo(thumb2);
    //         thumb2.css({marginLeft : '-100%'});
    //     });
    // });



    // artBtm 슬라이드
    // var thumb3 = $('.thumbnail.i3');
    // var button3 = $('.btns.i3>i');

    // thumb3.find('.article:nth-child(10)~div.article').prependTo(thumb3);
    // thumb3.css({marginLeft : '-100%'});

    // button3.first().click(function(){
    //     thumb3.animate({
    //         marginLeft : '0%'
    //     },700, function(){
    //         thumb3.find('.article:nth-child(10)~div.article').prependTo(thumb3);
    //         thumb3.css({marginLeft : '-100%'});
    //     });

    // });

    // button3.last().click(function(){
    //     thumb3.animate({
    //         marginLeft : '-200%'
    //     },700, function(){
    //         thumb3.find('.article:nth-child(-n+5)').appendTo(thumb3);
    //         thumb3.css({marginLeft : '-100%'});

    //     });
    // });



});
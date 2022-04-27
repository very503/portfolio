$(function(){

    var i = 0;
    $('.header>.nav>li').last().click(function(){
        $('.mbnav').css('display' , 'block');
    });
     $('.bar>li').first().click(function(){
         $('.mbnav').css('display' , 'none');
    })
    // 컨텐츠1
    $('.tab>li').click(function(){
        $('.tab>li').removeClass('show');
        $(this).addClass('show');
        var ind = $(this).index();
        $('.section>.artGroup').css('margin-left',ind*-100+'%');
        i=ind;
    });
     
        $('.btns>.btn').click(function(){
            $(this).css({
                backgroundColor:'#950000' 
            });
        });


  
    // 컨텐츠2
    $('.thumbGroup>li').click(function(){
        var ind = $(this).index();
        $('.thumbView>.artGroup').css('margin-left',ind*-100+'%');
        i=ind;
    });
    $('.btnRight').click(function(){
        i++;
        if(i>=4){
            i=4;
        }
        $('.thumbView>.artGroup').css('margin-left',i*-100+'%');

    });

    $('.btnLeft').click(function(){
        i--;
        if(i<=0){
            i=0;
        }
        $('.thumbView>.artGroup').css('margin-left',i*-100+'%');
    });

    $('.ftrTopRight>.nav').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });
});
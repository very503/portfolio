$(function(){
    var artGroup = $('.artGroup');
    var thumbGroup = $('.thumbGroup');
    var btns = $('.thumbView>.btns');
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
    thumbGroup.find('.article:last').prependTo(thumbGroup);
    thumbGroup.css({
        marginLeft : '-34%'
    });
    artGroup.find('.article:last').prependTo(artGroup);
    artGroup.css({
        marginLeft : '-100%'
    })
    btns.find('.btn:first').click(function(){
        thumbGroup.stop().animate({
            marginLeft : '0'
        },500,function(){
            thumbGroup.find('.article:last').prependTo(thumbGroup);
            thumbGroup.css({
                marginLeft : '-34%'
            });
        });
        artGroup.stop().animate({
            marginLeft : '0'
        },500,function(){
            artGroup.find('.article:last').prependTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
        });
    });
    btns.find('.btn:last').click(function(){
        thumbGroup.stop().animate({
            marginLeft : '-68%'
        },500,function(){
            thumbGroup.find('.article:first').appendTo(thumbGroup);
            thumbGroup.css({
               marginLeft : '-34%'
           }); 
        });
        artGroup.stop().animate({
            marginLeft : '-200%'
        },500,function(){
            artGroup.find('.article:first').appendTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
        });
    });
});
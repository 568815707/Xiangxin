/**
 * 
 * @authors vfasky (vfasky@gmail.com)
 * @date    2017-04-10 20:53:50
 * @version $Id$
 */
$(function(){
    $('.ccp1').addClass("bgeee");
    $('.ccp').click(function(){
        $(this).addClass("bgeee");
        $(this).parent().siblings().children().removeClass('bgeee');
    })
})
$(function(){
     $('myTabContent').carousel();
})

      $(function(){
    $("#slidershow").carousel({
        interval:2000
    });
    $("#slidershow a.left").click(function(){
        $(".carousel").carousel("prev");
    });
    $("#slidershow a.right").click(function(){
        $(".carousel").carousel("next");
    });
});

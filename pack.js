/**
 * Created by waywc on 2017/4/3.
 */

$(function(){

    var wh = $(window).height();
    var sec_panel = $("div.panel[data-order='2']");
    var expOffset = sec_panel.offset().top;
    var lifOffset = $("div.panel[data-order='3']").offset().top;
    var nav_h = $('nav').height();

    $(window).scroll(function(){
        if( $(document).scrollTop() > 0 ){
            $("nav").addClass("nav-active");
        }
        else{
            $("nav").removeClass("nav-active");
        }

        if( $(document).scrollTop() >= (expOffset-nav_h) && $(document).scrollTop() < (expOffset + wh - nav_h) ){
            $('#front-end-exp').addClass("active");
        }
        else{
            $('#front-end-exp').removeClass("active");
        }

        if( $(document).scrollTop() >= (lifOffset - nav_h) && $(document).scrollTop() < (lifOffset + 2*wh - nav_h) ){
            $('#life').addClass("active");
        }
        else{
            $('#life').removeClass("active");
        }

        if( $(document).scrollTop() >= (expOffset-nav_h-wh/3) ){
            $("div.panel[data-order='2']").addClass("in-view");
        }

        if( $(document).scrollTop() >= ($("div.panel[data-order='4']").offset().top + $('footer').height() - 20) ){
            $('#mail').addClass("active")
        }
        else{
            $('#mail').removeClass("active")
        }

    });

    var dataLi = $("li[data-ul='true'] > ul > li");
    var len = dataLi.siblings().length;
    var duration = $(dataLi[0]).css("animation-duration");
    duration = parseFloat(duration);
    for(var i=0;i<len;i++){
        $(dataLi[i]).css("animation-delay",duration*i + "s")
    }


    $("div.page-scroll").click(function() {
        $('body').animate({
            scrollTop : wh
        },500)
    });

    $('#front-end-exp').click(function(){
        $('body').animate({
            scrollTop : expOffset
        },500)
    });

    $('#life').click(function(){
        $('body').animate({
            scrollTop : lifOffset - nav_h
        })
    });


    $("#mask").css("height",$('footer').height() + "px");

    $('nav .logo').click(function(){
        var ul_ds = $('nav ul');
        if(ul_ds.css("display")=="none"){
            ul_ds.slideDown();
        }
        else{
            ul_ds.slideUp();
        }
    });



    var slider_children_music = $("div[data-theme='music'] div.slider-children");
    slider_children_music.first().before(slider_children_music.last());
    var music_exposition_para = $("div.exposition[data-theme='music'] > p");
    $(".prev[data-theme='music']").click(function () {

        var slider_children = $("div.slider-children[data-theme='music']");
        var activeSlider = $("div.active[data-theme='music']");
        slider_children.last().after(slider_children.first());

        var at = activeSlider.attr("data-feature");
        music_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).removeClass("active");

        activeSlider.removeClass("active").next().addClass("active");

        at = activeSlider.next().attr("data-feature");
        music_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).addClass("active");
    });

    $(".next[data-theme='music']").click(function () {
        var slider_children = $("div.slider-children[data-theme='music']");
        var activeSlider = $("div.active[data-theme='music']");
        slider_children.first().before(slider_children.last());

        var at = activeSlider.attr("data-feature");
        music_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).removeClass("active");

        activeSlider.removeClass("active").prev().addClass("active");

        at = activeSlider.prev().attr("data-feature");
        music_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).addClass("active");
    });


    var slider_children_cartoon = $("div[data-theme='cartoon'] div.slider-children");
    slider_children_cartoon.first().before(slider_children_cartoon.last());
    var cartoon_exposition_para = $("div.exposition[data-theme='cartoon'] > p");
    $(".prev[data-theme='cartoon']").click(function () {

        var slider_children = $("div.slider-children[data-theme='cartoon']");
        var activeSlider = $("div.active[data-theme='cartoon']");
        slider_children.last().after(slider_children.first());

        var at = activeSlider.attr("data-feature");
        cartoon_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).removeClass("active");

        activeSlider.removeClass("active").next().addClass("active");

        at = activeSlider.next().attr("data-feature");
        cartoon_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).addClass("active");
    });

    $(".next[data-theme='cartoon']").click(function () {
        var slider_children = $("div.slider-children[data-theme='cartoon']");
        var activeSlider = $("div.active[data-theme='cartoon']");
        slider_children.first().before(slider_children.last());

        var at = activeSlider.attr("data-feature");
        cartoon_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).removeClass("active");

        activeSlider.removeClass("active").prev().addClass("active");

        at = activeSlider.prev().attr("data-feature");
        cartoon_exposition_para.filter(function(){
            return ($(this).attr("data-feature") == at)
        }).addClass("active");
    });

});


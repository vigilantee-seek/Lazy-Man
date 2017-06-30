/**
 * Created by waywc on 2017/4/3.
 */
'use strict';


    var wh = $(window).height();
    var nav_h = $('nav').height();

    $('nav li').each(function(){
        var className = $(this).attr("class");
        var words = className.split("-");
        var idSelector = "#" + words[words.length - 1];
        console.log(idSelector);
        $(this).click(function(){
            $(idSelector).siblings().removeClass("delay");
            $(idSelector).siblings().removeClass("active");
            if(idSelector != "#home"){
                $('#home').addClass("bgEffects");
                $(idSelector).addClass("delay");
                $(idSelector).addClass("active");
            } else{
                $('#home').removeClass("bgEffects");
            }
        })
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



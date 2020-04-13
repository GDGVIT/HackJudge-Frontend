let trigger = $('.dropdown-trigger');
let judged = $('#judged');
let notJudged = $('#not-judged');
let all = $('#all');

trigger.on('click', function(){
    let dropdown = $('.team-dropdown');
    let angleUp = $('.fa-angle-up');
    let angleDown = $('.down-arrow');
    let comments = $('.comments');
    angleUp.slideToggle('hide');
    angleDown.slideToggle('hide');
    $(this).nextAll(dropdown).eq(0).slideToggle('hide');
});

judged.on('click', function(){
    if( judged.prop("checked", true) )
    {
        $('*').find('.not-evaluated').parent().parent().hide();
        $('*').find('.evaluated').parent().parent().show();
    }
});

notJudged.on('click', function(){
    if( notJudged.prop("checked", true) )
    {
        $('*').find('.not-evaluated').parent().parent().show();
        $('*').find('.evaluated').parent().parent().hide();
    }
});

all.on('click', function(){
    if( all.prop("checked", true) )
    {
        $('*').find('.not-evaluated').parent().parent().show();
        $('*').find('.evaluated').parent().parent().show();
    }
});


$(function(){

    $('input[type="number"]').niceNumber();
  
});
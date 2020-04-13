let trigger = $('.dropdown-trigger');

trigger.on('click', function(){
    let dropdown = $('.team-dropdown');
    let angleUp = $('.fa-angle-up');
    let angleDown = $('.down-arrow');
    let comments = $('.comments');
    angleUp.slideToggle('hide');
    angleDown.slideToggle('hide');
    $(this).nextAll(dropdown).eq(0).slideToggle('hide');
});

$(function(){

    $('input[type="number"]').niceNumber();
  
});
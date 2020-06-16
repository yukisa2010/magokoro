$(function(){
    $('.question-wrapper__list').on('click',function(){
        var $answer = $(this).find('.question-wrapper__answer');
        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
        }else{
            $answer.addClass('open');
            $answer.slideDown();
        }
    });
});
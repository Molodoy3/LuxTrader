$(Document).ready(function(){
    $('.user-header__icon').click(function(enent){
        $('.user-header__list').toggleClass('active');
    });
    $(".main-slider").slick({

    });
    $(".slider-quotes").slick({
        slidesToShow:1,
        dots:false,
    });
    $(".header__burger").click(function(event){
        $(".header__burger").toggleClass('active');
        $(".header__list").toggleClass('active');
    });
});
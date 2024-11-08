$(document).ready(function(){
    // .me-box-il 이미지에 마우스를 올리면
    $('.me-box-il, .me-box .contact').mouseenter(function(){
        // .me-box 내부의 .contact 요소가 보이도록 설정
        $('.me-box .contact').css({
            'opacity': '1',
            'transform': 'scale(1)'
        });
    });

    // h1 이펙트
    $('.me-box').mouseleave(function(){
        $('.me-box .contact').css({
            'opacity': '0',
            'transform': 'scale(0)'
        });
    });

});
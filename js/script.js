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

    // 백그라운드
    // let angle = 0;
    // setInterval(function () {
    //     angle += 1; // 각도를 1도씩 증가
    //     if (angle >= 360) angle = 0; // 360도를 넘어가면 초기화
    //     $("#wrap").css("background", `linear-gradient(${angle}deg, rgb(249, 249, 241), rgb(252, 255, 228), rgb(253, 247, 255))`);
    // }, 50);

    // 백그라운드 비디오

    //캔버스
  
});
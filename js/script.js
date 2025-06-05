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

    // 마우스 커스텀
    const customCursor = document.querySelector(".cursor-wrap");
    $(document).mousemove(function(e){
        gsap.to(customCursor,{
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1,
            opacity: 1,
        });
    })

    // 마우스 a:hover 이벤트
    $("body a").hover(
        function(){
            gsap.to(customCursor, {
                scale: 0.5,
                duration: 0.3,
            });
        },
        function(){
            gsap.to(customCursor, {
                scale: 1,
                duration: 0.3,
            });
        }
    )


});
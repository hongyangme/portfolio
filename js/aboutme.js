$(document).ready(function(){

    //슬라이드1
    $('.profile-card').css({'transform': 'translateX(0%)',
        'opacity' : '1'
    })
    setTimeout(function(){
        $('.me-box-wrap').css({'transform': 'translateX(0%)',
            'opacity' : '1'
        })
    },100);

    //슬라이드2
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0%)';  
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    // aside 관찰
    const asideElement = document.querySelector('aside');
    observer.observe(asideElement);


    //마우스 커스텀
    const customCursor = document.querySelector(".cursor-wrap");
    $(document).mousemove(function(e){
        gsap.to(customCursor,{
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1,
            opacity: 1
        });        
    })

    // 마우스 a:hover 이벤트
    $("body a").hover(
        function(){
            gsap.to(customCursor,{
                scale: 0.5,
                duration: 0.3
            });
        },
        function(){
            gsap.to(customCursor,{
                scale: 1,
                duration: 0.3
            });
        }
    )

});
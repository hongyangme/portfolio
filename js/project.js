$(document).ready(function(){

    var isAnimating = false;

    $(".menu > li").eq(0).addClass("on");
    $(".menu > li > a").eq(0).addClass("on-a");



    
    $("html").animate({scrollTop : 0}, 10);

    // wheel 이벤트: 페이지 전환 방지 및 스크롤 방향 처리
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    }, {passive: false});

    var mHtml = $("html");

    // 스크롤 이벤트 
    $(window).on("wheel", function(e){

        if (isAnimating) return; // 애니메이션 중에는 스크롤 무시

        isAnimating = true;

        var page = Math.ceil(mHtml.scrollTop() / $(window).height()) + 1;

        if (e.originalEvent.deltaY > 0) {
            if (page == 5) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 0) return;
            page--;
        }

        var posTop = (page - 1) * $(window).height();
        mHtml.animate({scrollTop: posTop}, 600, function(){
            isAnimating = false;
        });
    });

    // 메뉴 스크롤 이벤트 
    var inHeight = $(window).innerHeight();
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop(); // 현재 스크롤 위치

        $(".menu > li").removeClass("on");

        $("section").each(function(index) {
            var sectionTop = $(this).offset().top; 
            var sectionBottom = sectionTop + $(this).outerHeight(); 

            if (scroll >= sectionTop - inHeight * 0.5 && scroll < sectionBottom - inHeight * 0.5) {
                $(".menu > li").removeClass().eq(index).addClass("on");
                $(".menu > li > a").removeClass().eq(index).addClass("on-a");
            }
        });
    });

    // 메뉴 클릭 시 해당 섹션으로 스크롤 이동
    $('.menu li').click(function () {
        if (isAnimating) return; // 애니메이션 진행 중이면 클릭 무시

        isAnimating = true;
        var i = $(this).index();
        var ht = $('section').eq(i).offset().top;

        $('html, body').stop().animate({
            scrollTop: ht
        }, 600, function () {
            isAnimating = false;
        });

        console.log("Clicked Section Index: ", i, "Scroll Position: ", ht);
    });

    //observer 감지
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const img = $(section).find('.img-box');
                const pageInfo = $(section).find('.page-info');

                img.css({
                    'transform': 'translateX(0%)',  
                    'opacity': '1'
                });

                pageInfo.css({
                    'transform': 'translateX(0%)',
                    'opacity': '1'
                });

                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.5
    });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section); 
    });

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

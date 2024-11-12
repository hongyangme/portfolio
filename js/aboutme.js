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
        threshold: 0.3
    });
    // aside 관찰
    const asideElement = document.querySelector('aside');
    observer.observe(asideElement);


    //스크롤바 이슈
});
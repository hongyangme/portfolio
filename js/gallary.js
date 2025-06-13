$(document).ready(function(){

    
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
    $("body a, .img-wrap > div").hover(
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


    // 이미지 확대 이벤트
    const boxes = document.querySelectorAll('.img-wrap > div');
    const bg = document.querySelector('.img-zoom-bg');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const targetClass = box.dataset.target;
            const zoom = document.querySelector(`.${targetClass}`);

            bg.classList.add('active');
            zoom.classList.add('active');
        });
    });

    bg.addEventListener('click', (e) =>{
        if (e.target === bg){
            bg.classList.remove('active');
            document.querySelectorAll('.img-zoom-box.active').forEach(box => {
                box.classList.remove('active');
            })
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape'){
            bg.classList.remove('active');
            document.querySelectorAll('.img-zoom-box.active').forEach(box => {
            box.classList.remove('active');
            })
        }
    })
})
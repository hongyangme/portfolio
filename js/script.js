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

//  const videoElement = document.getElementById('bgVideo');
//  let mouseTimeout;
//  const stopDelay = 100;  // 마우스가 멈춘 후 1초 뒤에 비디오를 정지

//  // 마우스가 움직일 때 비디오를 재생
//  document.addEventListener('mousemove', function () {
//      // 비디오가 멈춰있으면 재생 시작
//      if (videoElement.paused) {
//          videoElement.play();
//      }

//      // 마우스가 움직일 때마다 이전의 timeout을 clear하고 새로 설정
//      clearTimeout(mouseTimeout);

//      // 마우스가 멈추면 1초 뒤에 비디오를 정지
//      mouseTimeout = setTimeout(function () {
//          videoElement.pause();
//      }, stopDelay);
//  });
});
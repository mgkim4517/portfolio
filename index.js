// a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());

// 메뉴 버튼
$('.gnb-button').on('click', (e) => {
  $(e.target).toggleClass('toggle-btn');
  $('.gnb-menu').toggleClass('show-menu');

  $('.gnb-menu li').each( (index, li) => {
    $(li).on('click', () => {
      $('.gnb-button').removeClass('toggle-btn');
      $('.gnb-menu').removeClass('show-menu');
    });
  });
});

// 옆으로 흐르는 텍스트
let $text = $('.move-text-box .move-text'); // 애니메이션 대상 지정
let $wrap = $('.move-text-box'); // 애니메이션 영역 선택

$text.clone().appendTo($wrap); //대상을 복사하여 무한히 보일수 있도록 함

TweenMax.to($wrap, 25, { // 40 : 애니메이션 기간 , 애니메이션을 40초 동안 실행
   x: -($text.width()), // text 2개의 너비 만큼 왼쪽 가로로 움직임
   ease: Linear.easeNone, //선형 이징 : 일정한 속도로 이동
   repeat: -1 // 무한히 반복 : -1 , 한번 실행 : 0
});

// 특정 영역 마우스 호버
gsap.set(".ball", {xPercent: -50, yPercent: -50});

let ball = document.querySelector(".ball");
let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let mouse = { x: pos.x, y: pos.y };
let speed = 0.1;

let xSet = gsap.quickSetter(ball, "x", "px");
let ySet = gsap.quickSetter(ball, "y", "px");



 window.addEventListener("mousemove", e => {    
   mouse.x = e.x;
   mouse.y = e.y;  
 });
 gsap.ticker.add(() => {
  let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
   
   pos.x += (mouse.x - pos.x) * dt;
   pos.y += (mouse.y - pos.y) * dt;
   xSet(pos.x);
   ySet(pos.y);
 });

gsap.set(ball, { scale: 0 })

let section = document.querySelector(".project-container");

section.onmouseenter = function(){

    gsap.to(ball, { scale: 1 })
}

section.onmousedown = function() { 
    gsap.to(ball, { scale: .7 })
}

section.onmouseup = function() { 
    gsap.to(ball, { scale: 1 })
}

section.onmouseleave = function(){

    gsap.to(ball, { scale: 0 })
}
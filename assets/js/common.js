// a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());

// gnb 버튼
function toggleMenu() {
  const button = document.querySelector('.gnb-button');
  const menu = document.querySelector('.gnb-menu');
  button.classList.toggle('toggle-btn');
  menu.classList.toggle('show-menu');
}

document.querySelector('.gnb-button').addEventListener('click', toggleMenu);

document.querySelectorAll('.gnb-button span').forEach(function(span) {
  span.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering the parent div click event
    toggleMenu();
  });
});

document.querySelectorAll('.gnb-menu li a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.gnb-menu').classList.remove('show-menu');
    document.querySelector('.gnb-button').classList.remove('toggle-btn');
  });
});

// gnb 안의 메뉴 클릭 시 특정 영역 이동
function getSamePageAnchor (link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }
  return link.hash;
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if(elem) {
    if(e) e.preventDefault();
    gsap.to(window, {scrollTo: elem});
  }
}

document.querySelectorAll('a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

scrollToHash(window.location.hash);
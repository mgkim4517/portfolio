// a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());

// 메뉴 버튼
  function toggleMenu() {
    const button = document.querySelector('.gnb-button');
    const menu = document.querySelector('.gnb-menu');
    button.classList.toggle('toggle-btn');
    menu.classList.toggle('show-menu');
  }

  document.querySelector('.gnb-button').addEventListener('click', toggleMenu);

  document.querySelectorAll('.gnb-button span').forEach(function(span) {
    span.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleMenu();
    });
  });

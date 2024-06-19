// go-to-top 위로 가기 버튼
document.addEventListener("DOMContentLoaded", function() {
  var goToTopButton = document.querySelector(".go-to-top");

  goToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
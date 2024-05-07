window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (
      document.body.scrollTop > 550 ||
      document.documentElement.scrollTop > 550
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  
// for search bar
  function filterGallery() {
var searchInput = document.getElementById("searchInput");
var filter = searchInput.value.toUpperCase();
var galleryContent = document.querySelectorAll(".content");

galleryContent.forEach(function (content) {
  var category = content.getAttribute("data-category").toUpperCase();
  var shouldDisplay = category.includes(filter);

  content.style.display = shouldDisplay ? "block" : "none";
});
}
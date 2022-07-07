function handleActiveLink(selector, link) {
  const section = document.querySelector(selector);
  const linkActive = document.querySelector(link);
  const scrollY = window.pageYOffset;
  const sectionHeight = section.offsetHeight;
  const sectionTop = section.offsetTop - 100;
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    linkActive.classList.add("active");
  } else {
    linkActive.classList.remove("active");
  }
}
window.addEventListener("load", function () {
  handleActiveLink(".hero", "#home");
  handleActiveLink(".service", "#service");
  handleActiveLink(".testimonial", "#testimonial");
  handleActiveLink(".footer", "#about");
});
window.addEventListener("scroll", function () {
  handleActiveLink(".hero", "#home");
  handleActiveLink(".service", "#service");
  handleActiveLink(".testimonial", "#testimonial");
  handleActiveLink(".footer", "#about");
});

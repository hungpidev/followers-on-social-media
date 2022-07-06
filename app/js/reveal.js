function handleReveal(selector, reveal) {
  const revealElement = document.querySelector(selector);
  const revealTop = revealElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const revealpoint = 150;
  if (revealTop < windowHeight - revealpoint) {
    revealElement.classList.add(reveal);
  } else {
    revealElement.classList.remove(reveal);
  }
}
window.addEventListener("load", function () {
  handleReveal(".hero__image", "reveal-hero-image");
  handleReveal(".hero--proof", "reveal-proof");
  handleReveal(".partner__desc", "reveal-partner-desc");
  handleReveal(".partner__list", "reveal-partner-list");
  handleReveal(".service__heading", "reveal-service-heading");
  handleReveal(".service__list", "reveal-service-list");
  handleReveal(".feature--top__content", "reveal-top-content");
  handleReveal(".feature--top__image", "reveal-top-image");
  handleReveal(".feature--bottom__content", "reveal-bottom-content");
  handleReveal(".feature--bottom__image", "reveal-bottom-image");
  handleReveal(".testimonial__box", "reveal-testimonial-box");
  handleReveal(".testimonial__list", "reveal-testimonial-list");
  handleReveal(".faq__left", "reveal-faq-left");
  handleReveal(".faq__right", "reveal-faq-right");
  handleReveal(".subscribe__box", "reveal-subscribe-box");
});

window.addEventListener("scroll", scrollAnimation);
function scrollAnimation() {
  handleReveal(".hero__image", "reveal-hero-image");
  handleReveal(".hero--proof", "reveal-proof");
  handleReveal(".partner__desc", "reveal-partner-desc");
  handleReveal(".partner__list", "reveal-partner-list");
  handleReveal(".service__heading", "reveal-service-heading");
  handleReveal(".service__list", "reveal-service-list");
  handleReveal(".feature--top__content", "reveal-top-content");
  handleReveal(".feature--top__image", "reveal-top-image");
  handleReveal(".feature--bottom__content", "reveal-bottom-content");
  handleReveal(".feature--bottom__image", "reveal-bottom-image");
  handleReveal(".testimonial__box", "reveal-testimonial-box");
  handleReveal(".testimonial__list", "reveal-testimonial-list");
  handleReveal(".faq__left", "reveal-faq-left");
  handleReveal(".faq__right", "reveal-faq-right");
  handleReveal(".subscribe__box", "reveal-subscribe-box");
}

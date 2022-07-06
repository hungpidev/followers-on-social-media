window.addEventListener("load", function () {
  function smoothScroll(selector, duration) {
    const target = document.querySelector(selector);
    const targetPosition = target.getBoundingClientRect().top;
    const startPositon = window.pageYOffset;
    let startTime = 0;
    function animation(currentTime) {
      if (startTime === 0) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = easeInOut(
        timeElapsed,
        startPositon,
        targetPosition,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    function easeInOut(t, b, c, d) {
      t = t / (d / 2);
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }
  const home = document.querySelector("#home");
  const service = document.querySelector("#service");
  const testimonial = document.querySelector("#testimonial");
  const about = document.querySelector("#about");
  home.addEventListener("click", () => {
    smoothScroll(".wrapper", 2000);
  });
  service.addEventListener("click", () => {
    smoothScroll(".service", 2000);
  });
  testimonial.addEventListener("click", () => {
    smoothScroll(".testimonial", 2000);
  });
  about.addEventListener("click", () => {
    smoothScroll(".footer__mid", 2000);
  });
  // Scroll Top
  function scrollToTop(btnScroll) {
    const scrollBtn = document.querySelector(btnScroll);
    scrollBtn.classList.add("hidden-btn-scroll");
    window.addEventListener("scroll", (e) => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 4400) {
        scrollBtn.classList.add("show-btn-scroll");
      } else {
        scrollBtn.classList.remove("show-btn-scroll");
      }
    });
    scrollBtn.addEventListener("click", () => {
      smoothScroll(".wrapper", 3000);
    });
  }
  scrollToTop(".scroll__top");
});

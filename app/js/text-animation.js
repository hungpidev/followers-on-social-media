window.addEventListener("load", function () {
  function handleTextAnimation() {
    const text = document.querySelector(".hero__heading");
    const stringText = text.textContent;
    const splitText = stringText.split("");
    let character = 0;
    let timer;
    const htmls = splitText.map((item) => {
      return `<span class="character">${item}</span>`;
    });
    text.innerHTML = htmls.join("");
    timer = setInterval(setTimeText, 50);
    function setTimeText() {
      const spanText = text.querySelectorAll(".character")[character];
      character++;
      spanText.classList.add("fade");
      if (character === splitText.length) {
        clearInterval(timer);
      }
    }
  }
  handleTextAnimation();
});

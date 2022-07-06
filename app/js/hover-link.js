window.addEventListener("load", function () {
  const menuItems = document.querySelectorAll(".menu__item");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", handleHoverLink);
    item.addEventListener("mouseleave", () => {
      line.style.opacity = 0;
    });
  });
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink() {
    const { left, top, width, height } =
      this.firstElementChild.getBoundingClientRect();
    const offsetBottom = 5;
    line.style.width = `${width}rem`;
    line.style.left = `${left}rem`;
    line.style.top = `${top + height + offsetBottom}rem`;
    line.style.opacity = 1;
  }
});

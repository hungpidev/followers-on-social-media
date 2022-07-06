window.addEventListener("load", function () {
  const buttonEmail = document.querySelector(".subscribe__button");
  buttonEmail.addEventListener("click", function (e) {
    alert("Hello Everyone");
    e.preventDefault();
  });
});

window.addEventListener("load", function () {
  let question = document.querySelectorAll(".faq__box");
  question.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      question.classList.toggle("active");
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "rem";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});

const toggleAccordeon = () => {
  let accordeon = document.querySelector(".accordeon");
  let listItem = accordeon.querySelectorAll(".element");
  listItem.forEach((element) => {
    element.addEventListener("click", function () {
      let text = this.querySelector(".element-content");
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        text.style.display = "none";
      } else {
        listItem.forEach((elem) => {
          elem.classList.remove("active");
          let content = elem.querySelector(".element-content");
          content.style.display = "none";
        });
        this.classList.add("active");
        text.style.display = "block";
      }
    });
  });
};
export default toggleAccordeon;
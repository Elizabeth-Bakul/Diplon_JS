const scrollLink = () => {
  const topMenu = document.querySelector(".top-menu");
  const scrollLinks = topMenu.querySelectorAll("a");

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute("href");
      if (id !== "#callback") {
        let element = document.querySelector(id);
        let yOffset=-100;
        let y=element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }
};
export default scrollLink;
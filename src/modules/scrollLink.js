const scrollLink = () => {
  const topMenu = document.querySelector(".top-menu");
  const scrollLinks = topMenu.querySelectorAll("a");

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute("href");
      if (id !== "#callback") {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
};
export default scrollLink;
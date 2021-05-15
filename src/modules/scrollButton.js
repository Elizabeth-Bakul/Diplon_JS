const scrollButton = () => {
  const trackScroll = () => {
    let scrolled = window.pageYOffset;
    let coordHeader = document.querySelector(".header-wrapper").clientHeight;
    let coordSlider = document.querySelector(".top-slider").clientHeight;
    let coords = coordHeader + coordSlider;
    if (scrolled > coords) {
      goTopBtn.classList.add("up-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("up-show");
    }
  };
  const backToTop = () => {
    document.querySelector("body").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  let goTopBtn = document.querySelector(".up");
  trackScroll();
  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
};
export default scrollButton;
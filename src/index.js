import togglePopUp from "./modules/togglePopUp";
import scrollButton from "./modules/scrollButton";
import scrollLink from "./modules/scrollLink";
import toggleAccordeon from "./modules/toggleAccordeon";
import toggleSlider from "./modules/toggleSlider";
import sendForm from "./modules/sendForm";
import SliderCarousel from "./modules/sliderCarousel";
togglePopUp("callback-btn");
togglePopUp("fancyboxModal");

scrollLink();

toggleSlider();

toggleAccordeon();

scrollButton();

sendForm("form1");

const options = {
  main: ".services-elements",
  wrap: ".services-carousel",
  next: ".arrow-right",
  prev: ".arrow-left",
  slidesToShow: 3,
  infinity: true,

  responsive: [
    {
      breakpoint: 1024,
      slideToShow: 3,
    },
    {
      breakpoint: 768,
      slideToShow: 2,
    },
    {
      breakpoint: 576,
      slideToShow: 1,
    },
  ],
};

const carousel = new SliderCarousel(options);

carousel.init();
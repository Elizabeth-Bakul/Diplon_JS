window.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  const togglePopUp = () => {
    const popupButtons = document.querySelectorAll(".callback-btn"),
      popup = document.querySelector(".modal-callback"),
      overlay = document.querySelector(".modal-overlay"),
      closePopUpButton = document.querySelector(".modal-close"),
      popUpContent = document.querySelector(".modal-callback");

    let idInterval,
      count = 0;

    // animate popup
    const animatePopUp = () => {
      count++;
      if (parseFloat(popUpContent.style.left) < 55) {
        popUpContent.style.left = count + "%";
      } else {
        clearInterval(idInterval);
        count = 0;
      }
    };

    popupButtons.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.style.display = "block";
        popup.style.display = "block";
        popUpContent.style.left = "-50%";
        if (window.innerWidth > 768) {
          idInterval = setInterval(animatePopUp, 10);
        } else {
          popUpContent.style.left = "58%";
        }
      });
    });
    closePopUpButton.addEventListener("click", () => {
      popup.style.display = "none";
      overlay.style.display = "none";
    })
    overlay.addEventListener("click", (e) => {
      let target = e.target;
      // если нажимаем кнопку "Закрыть" или нажимаем вне области окна, то закрываем его
      console.log(target);
      if (
        target.classList.contains("modal-close") ||
        (!target.closest(".modal-callback") &&
          !target.closest(".header__button"))
      ) {
        popup.style.display = "none";
        overlay.style.display = "none";
      }
    });
  };
  togglePopUp();
  const topMenu = document.querySelector('.top-menu');
  const scrollLinks = topMenu.querySelectorAll("a");

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute("href");
      console.log(id)
      if (id !== "#callback") {
        console.log("scroll");
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  const toggleSlider = () => {
    const slides = document.querySelectorAll(".item"),
      slider = document.querySelector(".top-slider"),
      table = document.querySelectorAll('.table');
      dotsContainer = document.querySelector(".slick-dots");
       let 
         currentSlide = 0,
         idInterval;
    // добавляем пагинацию
    slides.forEach((item, index) => {
      let li = document.createElement("li");
      if (index === 0) {
        li.classList.add("dot");
        li.classList.add("slick-active");
      } else {
        li.classList.add("dot");
      }
      dotsContainer.append(li);
    });

    let dots = document.querySelectorAll(".dot"); 

    // удаляем активный класс у текущего элемента слайдера
    const prevSlide = (element, index, strClass) => {
      element[index].classList.remove(strClass);
    };

    // добавляем активный класс следующему элементу слайдера
    const nextSlide = (element, index, strClass) => {
      element[index].classList.add(strClass);
    };

    // автоматическое переключение слайдов
    const autoPlaySlider = () => {
      prevSlide(slides, currentSlide, "item-active"); // скрываем текущий слайд
      prevSlide(dots, currentSlide, "slick-active"); // удаляем активный стиль пагинации текущего слайда
      prevSlide(dots, currentSlide, "active");

      currentSlide++;

      if (currentSlide === slides.length) {
        currentSlide = 0;
      }

      nextSlide(slides, currentSlide, "item-active"); // делаем видимым следующий слайд
      nextSlide(dots, currentSlide, "slick-active"); 
      nextSlide(table, currentSlide, "active");// добавялем активный стиль пагинации следующего слайда
    };

    // запуск слайдшоу
    const startAutoPlay = () => {
      console.log("start");
      idInterval = setInterval(autoPlaySlider, 3000);
    };
    startAutoPlay();

    // останов слайдшоу
    const stopAutoPlay = () => {
      console.log("stop");
      clearInterval(idInterval);
    };

    // останов слайдшоу при наведении на кнопку или пагинацию
    slider.addEventListener("mouseover", (e) => {
      if (e.target.matches(".dot")) {
        stopAutoPlay();
      }
    });

    // запуск слайдшоу в иных случаях
    slider.addEventListener("mouseout", (e) => {
      if (e.target.matches(".dot")) {
        startAutoPlay();
      }
    });

    // переключение слайдов по клику на кнопку или пагинацию
    slider.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.target;

      // условие для предовращения влияния клика по слайду на верстку
      if (!target.matches(".dot")) {
        return;
      }

      // удаляем стили у текущего слайда и пагинации
      prevSlide(dots, currentSlide, "slick-active");
      prevSlide(slides, currentSlide, "item-active");
      prevSlide(table, currentSlide, "dot-active");

      // обработка клика по кнопке или пагинации
      if (target.matches(".dot")) {
        dots.forEach((dot, index) => {
          if (dot === target) {
            currentSlide = index;
          }
        });
      }
      // условие для бесконечного листания слайдов
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      // добавляем стили следующему слайду и пагинации
      nextSlide(slides, currentSlide, "item-active");
      nextSlide(dots, currentSlide, "slick-active");
      nextSlide(table, currentSlide, "active");
    });
  };
  toggleSlider();
  class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 3,
      responsive = [],
    }) {
      if (!main || !wrap) {
        console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
      };
      this.responsive = responsive;
    }

    init() {
      console.log(this);
      this.addGloClass();
      this.addStyle();
      this.controlSlider();

      if (this.responsive) {
        this.responseInit();
      }
    }

    addGloClass() {
      this.main.classList.add("glo-slider");
      this.wrap.classList.add("glo-slider__wrap");
      for (const item of this.slides) {
        item.classList.add("glo-slider__item");
      }
    }

    addStyle() {
      let style = document.getElementById("sliderCarusel-style");
      if (!style) {
        style = document.createElement("style");
        style.id = "sliderCarusel-style";
      }

      document.head.appendChild(style);
      style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }
      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .glo-slider__item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }
    `;
    }

    controlSlider() {
      this.prev.addEventListener("click", this.prevSlider.bind(this));
      this.next.addEventListener("click", this.nextSlider.bind(this));
    }

    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.slides.length - this.slidesToShow;
        }
        this.wrap.style.transform = `translateX(-${
          this.options.position * this.options.widthSlide
        }%)`;
      }
    }

    nextSlider() {
      if (
        this.options.infinity ||
        this.options.position < this.slides.length - this.slidesToShow
      ) {
        ++this.options.position;
        if (this.options.position > this.slides.length - this.slidesToShow) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${
          this.options.position * this.options.widthSlide
        }%)`;
      }
    }


    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map((item) => item.breakpoint);
      const maxResponse = Math.max(...allResponse);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };

      checkResponse();
      window.addEventListener("resize", checkResponse);
    }
  }
});
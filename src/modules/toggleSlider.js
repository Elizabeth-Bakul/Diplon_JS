const toggleSlider = () => {
  const slides = document.querySelectorAll(".item"),
    slider = document.querySelector(".top-slider"),
    table = document.querySelectorAll(".table"),
  dotsContainer = document.querySelector(".slick-dots");
  let currentSlide = 0,
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
    nextSlide(table, currentSlide, "active"); // добавялем активный стиль пагинации следующего слайда
  };

  // запуск слайдшоу
  const startAutoPlay = () => {
    idInterval = setInterval(autoPlaySlider, 3000);
  };
  startAutoPlay();

  // останов слайдшоу
  const stopAutoPlay = () => {
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
    prevSlide(table, currentSlide, "active");

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
export default toggleSlider;
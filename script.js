window.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  const togglePopUp = (formIdString) => {
    const popupButtons = document.querySelectorAll(`.${formIdString}`),
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
    });
    overlay.addEventListener("click", (e) => {
      let target = e.target;
      // если нажимаем кнопку "Закрыть" или нажимаем вне области окна, то закрываем его
      if (
        target.classList.contains("modal-close") ||
        (!target.closest(".modal-callback"))
      ) {
        popup.style.display = "none";
        overlay.style.display = "none";
      }
    });
  };
  togglePopUp("callback-btn");
  togglePopUp("fancyboxModal");
  const scrollLink = ()=> {
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
  }
  scrollLink();

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
  const toogleAccordeon = ()=>{
    let accordeon=document.querySelector('.accordeon');
    let listItem = accordeon.querySelectorAll('.element');
    listItem.forEach((element)=>{
      element.addEventListener("click", function() {
        let text = this.querySelector(".element-content");
        if (this.classList.contains("active")){
          this.classList.remove("active");
          text.style.display = "none";
        } else {
          for(el of listItem){
            el.classList.remove("active");
            let content = el.querySelector(".element-content");
            content.style.display = "none";
          }
          this.classList.add("active");
          text.style.display = "block";
        }
      });
    });
  }
  toogleAccordeon();

  const scrollButton = ()=>{
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
      document.querySelector('body').scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    let goTopBtn = document.querySelector(".up");
    trackScroll();
    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);

    
  }
  scrollButton();

  const sendForm = (formIdString) => {
    const errorMessage = "Ошибка",
      loadMessage = "Загрузка...",
      successMessage = "Спасибо! Мы скоро с вами свяжемся!";

    const form = document.getElementById(formIdString), // форма для заполнения заявки
      statusMessageElement = document.createElement("div"), // сообщение о статусе отправки заявки
      inputs = document.querySelectorAll(`#${formIdString} input`); // все inputs из формы

    statusMessageElement.style.cssText = "text-align: center; color: black";

    // Функция отправки данных формы на сервер
    const postData = (requestBody) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            resolve();
          } else {
            reject(request.statusText);
          }
        });
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(requestBody));
      });
    };

    // Валидация данных при вводе телефона
    form.addEventListener("input", (e) => {
      if (e.target.matches('input[name="tel"]')) {
        e.target.setAttribute("pattern", "^[0-9+]{11,18}$");
        e.target.value = e.target.value.replace(/[^\d\+]/g, "");
      }
    });


    // Валидация данных при вводе имени
    form.addEventListener("input", (e) => {
      if (e.target.matches('input[name="fio"]')) {
        e.target.setAttribute("pattern", "[А-Яа-яЁё ]{2,}");
        e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s]|/g, "");
      }
    });

    // Слушатель формы
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.append(statusMessageElement);

      statusMessageElement.textContent = loadMessage;

      const formData = new FormData(form);
      let body = {};

      // берем данные формы и заполняем тело запроса body
      formData.forEach((item, index) => (body[index] = item)); // у объекта formData есть свой метод forEach()

      // отправка данных и уведомление пользователя
      postData(body)
        .then(() => (statusMessageElement.textContent = successMessage))
        .catch((error) => {
          statusMessageElement.textContent = errorMessage;
          console.log(error);
        });

      inputs.forEach((item) => (item.value = "")); // очистка input после отправки данных
    });
  };
  sendForm("form1");
});
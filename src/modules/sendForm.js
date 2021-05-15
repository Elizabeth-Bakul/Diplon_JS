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
export default sendForm;
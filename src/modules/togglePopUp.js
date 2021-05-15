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
      !target.closest(".modal-callback")
    ) {
      popup.style.display = "none";
      overlay.style.display = "none";
    }
  });
};
export default togglePopUp;
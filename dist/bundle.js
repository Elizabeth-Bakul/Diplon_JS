/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_scrollButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollButton */ \"./src/modules/scrollButton.js\");\n/* harmony import */ var _modules_scrollLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollLink */ \"./src/modules/scrollLink.js\");\n/* harmony import */ var _modules_toggleAccordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleAccordeon */ \"./src/modules/toggleAccordeon.js\");\n/* harmony import */ var _modules_toggleSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleSlider */ \"./src/modules/toggleSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n\n\n\n\n\n\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_0__.default)(\"callback-btn\");\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_0__.default)(\"fancyboxModal\");\n(0,_modules_scrollLink__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_toggleSlider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_toggleAccordeon__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_scrollButton__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)(\"form1\");\nvar options = {\n  main: \".services-elements\",\n  wrap: \".services-carousel\",\n  next: \".arrow-right\",\n  prev: \".arrow-left\",\n  slidesToShow: 3,\n  infinity: true,\n  responsive: [{\n    breakpoint: 1024,\n    slideToShow: 3\n  }, {\n    breakpoint: 768,\n    slideToShow: 2\n  }, {\n    breakpoint: 576,\n    slideToShow: 1\n  }]\n};\nvar carousel = new _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_6__.default(options);\ncarousel.init();\n\n//# sourceURL=webpack://diplom-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/scrollButton.js":
/*!*************************************!*\
  !*** ./src/modules/scrollButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollButton = function scrollButton() {\n  var trackScroll = function trackScroll() {\n    var scrolled = window.pageYOffset;\n    var coordHeader = document.querySelector(\".header-wrapper\").clientHeight;\n    var coordSlider = document.querySelector(\".top-slider\").clientHeight;\n    var coords = coordHeader + coordSlider;\n\n    if (scrolled > coords) {\n      goTopBtn.classList.add(\"up-show\");\n    }\n\n    if (scrolled < coords) {\n      goTopBtn.classList.remove(\"up-show\");\n    }\n  };\n\n  var backToTop = function backToTop() {\n    document.querySelector(\"body\").scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  };\n\n  var goTopBtn = document.querySelector(\".up\");\n  trackScroll();\n  window.addEventListener(\"scroll\", trackScroll);\n  goTopBtn.addEventListener(\"click\", backToTop);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollButton);\n\n//# sourceURL=webpack://diplom-js/./src/modules/scrollButton.js?");

/***/ }),

/***/ "./src/modules/scrollLink.js":
/*!***********************************!*\
  !*** ./src/modules/scrollLink.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar scrollLink = function scrollLink() {\n  var topMenu = document.querySelector(\".top-menu\");\n  var scrollLinks = topMenu.querySelectorAll(\"a\");\n\n  var _iterator = _createForOfIteratorHelper(scrollLinks),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var scrollLink = _step.value;\n      scrollLink.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n        var id = scrollLink.getAttribute(\"href\");\n\n        if (id !== \"#callback\") {\n          document.querySelector(id).scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n          });\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollLink);\n\n//# sourceURL=webpack://diplom-js/./src/modules/scrollLink.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(formIdString) {\n  var errorMessage = \"Ошибка\",\n      loadMessage = \"Загрузка...\",\n      successMessage = \"Спасибо! Мы скоро с вами свяжемся!\";\n  var form = document.getElementById(formIdString),\n      // форма для заполнения заявки\n  statusMessageElement = document.createElement(\"div\"),\n      // сообщение о статусе отправки заявки\n  inputs = document.querySelectorAll(\"#\".concat(formIdString, \" input\")); // все inputs из формы\n\n  statusMessageElement.style.cssText = \"text-align: center; color: black\"; // Функция отправки данных формы на сервер\n\n  var postData = function postData(requestBody) {\n    return new Promise(function (resolve, reject) {\n      var request = new XMLHttpRequest();\n      request.addEventListener(\"readystatechange\", function () {\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          resolve();\n        } else {\n          reject(request.statusText);\n        }\n      });\n      request.open(\"POST\", \"server.php\");\n      request.setRequestHeader(\"Content-Type\", \"application/json\");\n      request.send(JSON.stringify(requestBody));\n    });\n  }; // Валидация данных при вводе телефона\n\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"tel\"]')) {\n      e.target.setAttribute(\"pattern\", \"^[0-9+]{11,18}$\");\n      e.target.value = e.target.value.replace(/[^\\d\\+]/g, \"\");\n    }\n  }); // Валидация данных при вводе имени\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"fio\"]')) {\n      e.target.setAttribute(\"pattern\", \"[А-Яа-яЁё ]{2,}\");\n      e.target.value = e.target.value.replace(/[^А-Яа-яЁё\\s]|/g, \"\");\n    }\n  }); // Слушатель формы\n\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    form.append(statusMessageElement);\n    statusMessageElement.textContent = loadMessage;\n    var formData = new FormData(form);\n    var body = {}; // берем данные формы и заполняем тело запроса body\n\n    formData.forEach(function (item, index) {\n      return body[index] = item;\n    }); // у объекта formData есть свой метод forEach()\n    // отправка данных и уведомление пользователя\n\n    postData(body).then(function () {\n      return statusMessageElement.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessageElement.textContent = errorMessage;\n      console.log(error);\n    });\n    inputs.forEach(function (item) {\n      return item.value = \"\";\n    }); // очистка input после отправки данных\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom-js/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, SliderCarousel);\n\n    if (!main || !wrap) {\n      console.warn('slider-carusel: Необходимо 2 свойства, \"main\" и \"wrap\"!');\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow)\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addGloClass();\n      this.addStyle();\n      this.controlSlider();\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      this.main.classList.add(\"glo-slider\");\n      this.wrap.classList.add(\"glo-slider__wrap\");\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add(\"glo-slider__item\");\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.getElementById(\"sliderCarusel-style\");\n\n      if (!style) {\n        style = document.createElement(\"style\");\n        style.id = \"sliderCarusel-style\";\n      }\n\n      document.head.appendChild(style);\n      style.textContent = \"\\n      .glo-slider {\\n        overflow: hidden !important;\\n      }\\n      .glo-slider__wrap {\\n        display: flex !important;\\n        transition: transform 0.5s !important;\\n        will-change: transform !important;\\n      }\\n      .glo-slider__item {\\n        flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n        margin: auto 0 !important;\\n      }\\n    \");\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener(\"click\", this.prevSlider.bind(this));\n      this.next.addEventListener(\"click\", this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.slides.length - this.slidesToShow;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\n        ++this.options.position;\n\n        if (this.options.position > this.slides.length - this.slidesToShow) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slideToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener(\"resize\", checkResponse);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://diplom-js/./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/toggleAccordeon.js":
/*!****************************************!*\
  !*** ./src/modules/toggleAccordeon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleAccordeon = function toggleAccordeon() {\n  var accordeon = document.querySelector(\".accordeon\");\n  var listItem = accordeon.querySelectorAll(\".element\");\n  listItem.forEach(function (element) {\n    element.addEventListener(\"click\", function () {\n      var text = this.querySelector(\".element-content\");\n\n      if (this.classList.contains(\"active\")) {\n        this.classList.remove(\"active\");\n        text.style.display = \"none\";\n      } else {\n        listItem.forEach(function (elem) {\n          elem.classList.remove(\"active\");\n          var content = elem.querySelector(\".element-content\");\n          content.style.display = \"none\";\n        });\n        this.classList.add(\"active\");\n        text.style.display = \"block\";\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleAccordeon);\n\n//# sourceURL=webpack://diplom-js/./src/modules/toggleAccordeon.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp(formIdString) {\n  var popupButtons = document.querySelectorAll(\".\".concat(formIdString)),\n      popup = document.querySelector(\".modal-callback\"),\n      overlay = document.querySelector(\".modal-overlay\"),\n      closePopUpButton = document.querySelector(\".modal-close\"),\n      popUpContent = document.querySelector(\".modal-callback\");\n  var idInterval,\n      count = 0; // animate popup\n\n  var animatePopUp = function animatePopUp() {\n    count++;\n\n    if (parseFloat(popUpContent.style.left) < 55) {\n      popUpContent.style.left = count + \"%\";\n    } else {\n      clearInterval(idInterval);\n      count = 0;\n    }\n  };\n\n  popupButtons.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      overlay.style.display = \"block\";\n      popup.style.display = \"block\";\n      popUpContent.style.left = \"-50%\";\n\n      if (window.innerWidth > 768) {\n        idInterval = setInterval(animatePopUp, 10);\n      } else {\n        popUpContent.style.left = \"58%\";\n      }\n    });\n  });\n  closePopUpButton.addEventListener(\"click\", function () {\n    popup.style.display = \"none\";\n    overlay.style.display = \"none\";\n  });\n  overlay.addEventListener(\"click\", function (e) {\n    var target = e.target; // если нажимаем кнопку \"Закрыть\" или нажимаем вне области окна, то закрываем его\n\n    if (target.classList.contains(\"modal-close\") || !target.closest(\".modal-callback\")) {\n      popup.style.display = \"none\";\n      overlay.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://diplom-js/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/toggleSlider.js":
/*!*************************************!*\
  !*** ./src/modules/toggleSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleSlider = function toggleSlider() {\n  var slides = document.querySelectorAll(\".item\"),\n      slider = document.querySelector(\".top-slider\"),\n      table = document.querySelectorAll(\".table\"),\n      dotsContainer = document.querySelector(\".slick-dots\");\n  var currentSlide = 0,\n      idInterval; // добавляем пагинацию\n\n  slides.forEach(function (item, index) {\n    var li = document.createElement(\"li\");\n\n    if (index === 0) {\n      li.classList.add(\"dot\");\n      li.classList.add(\"slick-active\");\n    } else {\n      li.classList.add(\"dot\");\n    }\n\n    dotsContainer.append(li);\n  });\n  var dots = document.querySelectorAll(\".dot\"); // удаляем активный класс у текущего элемента слайдера\n\n  var prevSlide = function prevSlide(element, index, strClass) {\n    element[index].classList.remove(strClass);\n  }; // добавляем активный класс следующему элементу слайдера\n\n\n  var nextSlide = function nextSlide(element, index, strClass) {\n    element[index].classList.add(strClass);\n  }; // автоматическое переключение слайдов\n\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slides, currentSlide, \"item-active\"); // скрываем текущий слайд\n\n    prevSlide(dots, currentSlide, \"slick-active\"); // удаляем активный стиль пагинации текущего слайда\n\n    prevSlide(dots, currentSlide, \"active\");\n    currentSlide++;\n\n    if (currentSlide === slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, \"item-active\"); // делаем видимым следующий слайд\n\n    nextSlide(dots, currentSlide, \"slick-active\");\n    nextSlide(table, currentSlide, \"active\"); // добавялем активный стиль пагинации следующего слайда\n  }; // запуск слайдшоу\n\n\n  var startAutoPlay = function startAutoPlay() {\n    idInterval = setInterval(autoPlaySlider, 3000);\n  };\n\n  startAutoPlay(); // останов слайдшоу\n\n  var stopAutoPlay = function stopAutoPlay() {\n    clearInterval(idInterval);\n  }; // останов слайдшоу при наведении на кнопку или пагинацию\n\n\n  slider.addEventListener(\"mouseover\", function (e) {\n    if (e.target.matches(\".dot\")) {\n      stopAutoPlay();\n    }\n  }); // запуск слайдшоу в иных случаях\n\n  slider.addEventListener(\"mouseout\", function (e) {\n    if (e.target.matches(\".dot\")) {\n      startAutoPlay();\n    }\n  }); // переключение слайдов по клику на кнопку или пагинацию\n\n  slider.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    var target = e.target; // условие для предовращения влияния клика по слайду на верстку\n\n    if (!target.matches(\".dot\")) {\n      return;\n    } // удаляем стили у текущего слайда и пагинации\n\n\n    prevSlide(dots, currentSlide, \"slick-active\");\n    prevSlide(slides, currentSlide, \"item-active\");\n    prevSlide(table, currentSlide, \"active\"); // обработка клика по кнопке или пагинации\n\n    if (target.matches(\".dot\")) {\n      dots.forEach(function (dot, index) {\n        if (dot === target) {\n          currentSlide = index;\n        }\n      });\n    } // условие для бесконечного листания слайдов\n\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    } else if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    } // добавляем стили следующему слайду и пагинации\n\n\n    nextSlide(slides, currentSlide, \"item-active\");\n    nextSlide(dots, currentSlide, \"slick-active\");\n    nextSlide(table, currentSlide, \"active\");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleSlider);\n\n//# sourceURL=webpack://diplom-js/./src/modules/toggleSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
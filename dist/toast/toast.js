"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./toast.css");

require("../css/transitions.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  alignment: 'top-center'
};

var toast = /*#__PURE__*/function () {
  function toast() {
    _classCallCheck(this, toast);
  }

  _createClass(toast, null, [{
    key: "success",
    value: function success(messageText, duration, options) {
      var type = "success";
      renderGeneric(type, messageText, duration, options);
    }
  }, {
    key: "error",
    value: function error(messageText, duration, options) {
      var type = "error";
      renderGeneric(type, messageText, duration, options);
    }
  }, {
    key: "warning",
    value: function warning(messageText, duration, options) {
      var type = "warning";
      renderGeneric(type, messageText, duration, options);
    }
  }, {
    key: "info",
    value: function info(messageText, duration, options) {
      var type = "info";
      renderGeneric(type, messageText, duration, options);
    }
  }, {
    key: "custom",
    value: function custom() {}
  }]);

  return toast;
}();

exports.toast = toast;

function renderGeneric(type, messageText) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultOptions;
  var iconClass = getIconClass(type);
  var alignment = (options === null || options === void 0 ? void 0 : options.alignment) || 'top-center';
  renderElement(alignment, type, iconClass, messageText, duration);
}

function renderElement(alignment, messageType, iconClass, messageText, duration) {
  var elements = document.querySelectorAll(".am-message-container.".concat(alignment));
  var instance = elements.length + 1;
  var topStyle = 10;
  var isTopAlignment = alignment.includes('top') ? true : false;
  console.log(isTopAlignment);
  elements.forEach(function (e) {
    topStyle += e.clientHeight + 5;
  });

  var removeInstance = function removeInstance() {
    var elementsByClass = document.querySelectorAll(".am-message-container.".concat(alignment));
    var element;
    elementsByClass.forEach(function (e) {
      if (e.id === "am-message-item-".concat(instance)) {
        element = e;
      }
    });
    element.childNodes[0].className += " am-move-up-leave am-move-up-leave-active";
    setTimeout(function () {
      element.parentElement.remove();
      var newElements = document.querySelectorAll(".am-message-container.".concat(alignment));
      var newTopStyle = 10;
      newElements.forEach(function (e, idx) {
        if (isTopAlignment) {
          e.style.top = newTopStyle.toString() + "px";
        } else {
          e.style.bottom = newTopStyle.toString() + "px";
        }

        newTopStyle += e.clientHeight + 5;
      });
    }, 500);
  };

  var Element = function Element(props) {
    var targetRef = (0, _react.useRef)();
    var style;

    if (isTopAlignment) {
      style = {
        'top': topStyle
      };
    } else {
      style = {
        'bottom': topStyle
      };
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: style,
      id: "am-message-item-".concat(instance),
      className: "am-message-container ".concat(alignment),
      onClick: removeInstance
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "am-message-body am-enter-down am-enter-down-active"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "am-message-content",
      ref: targetRef
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "am-message-inner am-".concat(messageType, "-message")
    }, /*#__PURE__*/_react["default"].createElement("span", {
      role: "img",
      className: "am-icon"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: iconClass
    })), /*#__PURE__*/_react["default"].createElement("span", null, messageText)))));
  };

  var elementExists = document.getElementById("am-toast-message");

  if (!elementExists) {
    var parentElem = document.createElement('div');
    var elem = document.createElement('div');
    elem.id = "am-toast-message";
    parentElem.appendChild(elem);
    document.body.appendChild(parentElem);
  }

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Element, null), document.getElementById('am-toast-message').parentElement);

  setTimeout(function () {
    var elementsByClass = document.querySelectorAll(".am-message-container.".concat(alignment));
    var element;
    elementsByClass.forEach(function (e) {
      if (e.id === "am-message-item-".concat(instance)) {
        element = e;
      }
    });

    if (element) {
      element.childNodes[0].classList.remove("am-enter-down", "am-enter-down-active");
    }
  }, 1000);

  if (duration !== 0) {
    setTimeout(function () {
      removeInstance();
    }, duration * 1000);
  }
}

function getIconClass(messageType) {
  switch (messageType) {
    case 'success':
      return "fa fa-check";

    case 'error':
      return "fas fa-times";

    case 'info':
      return "fas fa-info-circle";

    case 'warning':
      return "fas fa-exclamation-circle";

    default:
      return "far fa-bell";
  }
}
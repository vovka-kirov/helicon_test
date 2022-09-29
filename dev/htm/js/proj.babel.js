"use strict"; //
// price with spaces

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var add_spaces = function add_spaces(n) {
  return n.toLocaleString('ru');
}; //
// set data to template


var setData = function setData() {
  var data = [{
    id: 1,
    name: 'Коптильня 10л',
    price: 1200
  }, {
    id: 2,
    name: 'Коптильня 20л',
    price: 1400
  }, {
    id: 3,
    name: 'Коптильня 30л',
    price: 1600
  }];
  var items = document.querySelectorAll(".cat .item");

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;

      var ind = _toConsumableArray(el.parentNode.children).indexOf(el);

      el.querySelector(".item__h a").textContent = data[ind].name;
      el.querySelector(".item__price").textContent = add_spaces(data[ind].price) + " руб.";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}; //
// sum of prices


var addToCart = function addToCart(el) {
  if (!el.disabled) {
    el.disabled = true;
    el.textContent = "Добавлено";
  }

  var price = el.closest(".item").querySelector(".item__price").textContent;
  price = Number(price.replace(/\D/g, ''));
  var $sum = el.closest(".cat").querySelector(".cat__sum .sum__val");
  var sum = $sum.textContent;
  sum = add_spaces(Number(sum.replace(/\D/g, '')) + price);
  $sum.textContent = sum;
};

var buts = document.querySelectorAll(".cat .item__but");

var _iterator2 = _createForOfIteratorHelper(buts),
    _step2;

try {
  var _loop = function _loop() {
    var el = _step2.value;
    el.addEventListener("click", function () {
      return addToCart(el);
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop();
  } //
  // on dom load 

} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var ready = function ready() {
  setData(); // set data to items
};

document.addEventListener("DOMContentLoaded", ready);
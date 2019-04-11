"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_toConsumableArray(document.querySelectorAll('.slide_list li')).forEach(function (li) {
  li.onclick = function () {
    document.querySelector('.slide_list li.active').classList.remove("active");
    this.classList.add("active"); //document.querySelector('.main_slider img').setAttribute("src", this.firstElementChild.getAttribute("src"))

    document.querySelector('.main_slider img').src = this.firstElementChild.src;
  };
});

_toConsumableArray(document.querySelectorAll('.arrow')).forEach(function (arr) {
  arr.onclick = function () {
    //find active
    var activeLi = document.querySelector('.slide_list li.active');
    activeLi.classList.remove("active");
    var newActiveLi;
    if (this.classList.contains("arrow_left")) newActiveLi = activeLi.previousElementSibling || document.querySelector('.slide_list li:last-child');else newActiveLi = activeLi.nextElementSibling || document.querySelector('.slide_list li:first-child');
    newActiveLi.classList.add("active");
    document.querySelector('.main_slider img').src = newActiveLi.firstElementChild.src; //1ST WAY   
    // let src;
    // if(this.classList.contains("arrow_left"))
    // {
    //     if(activeLi.previousElementSibling !== null)
    //     {
    //         activeLi.previousElementSibling.classList.add("active");
    //         src = activeLi.previousElementSibling.firstElementChild.src;
    //     }
    //     else
    //     {
    //         const last = document.querySelector('.slide_list li:last-child');
    //         last.classList.add("active");
    //         src = last.firstElementChild.src;
    //     }
    // }
    // else
    // {
    //     if(activeLi.nextElementSibling !== null)
    //     {
    //         activeLi.nextElementSibling.classList.add("active");
    //         src = activeLi.nextElementSibling.firstElementChild.src;
    //     }
    //     else
    //     {
    //         const first = document.querySelector('.slide_list li:first-child');
    //         first.classList.add("active");
    //         src = first.firstElementChild.src;
    //     }
    // }
    // document.querySelector('.main_slider img').src = src;
  };
});
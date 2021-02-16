/**
 * Smooth Scroll
 */
// Scrollbar.init(document.querySelector('#my-scrollbar'));


/**
 * Homepage Function
 * */
var backdrop = document.querySelector('#backdrop'),
   hamburger = document.querySelector('#hamburger'),
   body = document.querySelector('body');

hamburger.addEventListener("click", function () {
   body.classList.add("active");
});

backdrop.addEventListener("click", function () {
   body.classList.remove("active");
});

/**
 * News Function
 * */

//next-prev images when button.clicked
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//    showDivs(slideIndex += n);
// }

// function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName("news-slides");
//    if (n > x.length) { slideIndex = 1 }
//    if (n < 1) { slideIndex = x.length }
//    for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//    }
//    x[slideIndex - 1].style.display = "block";
// }

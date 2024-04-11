'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// play youtube video

document.addEventListener("DOMContentLoaded", function() {
  const playButton = document.querySelector('.play-btn');
  const watchMoreLink = document.getElementById('watch-more');

  playButton.addEventListener('click', function() {
    // Replace the '#' with the link to your YouTube video
    window.location.href = 'https://www.youtube.com/embed/HQfF5XRVXjU?si=Df8SJe9e8PN-lhjX';
  });

  watchMoreLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Replace 'fitness' with your desired search query
    const searchQuery = 'fitness';
    // Construct the YouTube search URL
    const searchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
    // Open the search URL in a new tab
    window.open(searchUrl, '_blank');
  });
});
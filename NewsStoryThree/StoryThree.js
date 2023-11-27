document.addEventListener("DOMContentLoaded", function () {
    var fadeInElements = document.querySelectorAll(".fade-in");
    var timelineElements = document.querySelectorAll(".content");

    function fadeInOnScroll() {
      fadeInElements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });

      timelineElements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
          element.classList.add("visible");
        }
      });
    }

    fadeInOnScroll();

    window.addEventListener("scroll", fadeInOnScroll);
  });
  document.addEventListener("scroll", function () {
    const timelineIntro = document.querySelector(".timelineintro");
    //const spaceship = document.getElementById("spaceship");

    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    
}) ;

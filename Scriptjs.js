
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});


const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,  // Ensures slides are centered
    initialSlide: 0,  // Start from the first slide, but it will be centered
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1, 
            // spaceBetween: 100,
              // Adds space around the single card on mobile
        },
        620: {
            slidesPerView: 2, 
           
        },
        1024: {
            slidesPerView: 3,
            
        }
    }
  
  });
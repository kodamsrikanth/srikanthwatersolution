// memu btn js code starts here

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//  contact-popup section starts

const openContactPopupButton = document.getElementById('openContactPopupButton');
const contactPopup = document.getElementById('contactPopup');

openContactPopupButton.addEventListener('click', () => {
    contactPopup.classList.add('visible');
});

contactPopup.addEventListener('click', (event) => {
    if (event.target.id === 'contactPopup' || event.target.classList.contains('close-popup-btn')) {
        contactPopup.classList.remove('visible');
    }
});

//  contact-popup section starts

// memu btn js code ends here

  //  social popup box  section starts (This code for when we click on social meidia button in header section. then this box will open in popup effect) 

        // JavaScript code
        const openFormButton = document.getElementById('OpenLocationPopup');
        const formPopup = document.getElementById('popup');

        openFormButton.addEventListener('click', () => {
            formPopup.classList.add('visible');
        });

        formPopup.addEventListener('click', (event) => {
            if (event.target.id === 'popup' || event.target.classList.contains('social-close-btn')) {
                formPopup.classList.remove('visible');
            }
        });

 // social popup box  section ends

 
// search-btn-container section starts here

let cart = document.querySelector('.search-btn-container');

document.querySelector('#search-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    // loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function filterOptions() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const optionsContainer = document.getElementById('optionsContainer');
    const options = optionsContainer.getElementsByClassName('option-item');

    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].textContent.toLowerCase();
      if (optionText.includes(input)) {
        options[i].style.display = 'block';
      } else {
        options[i].style.display = 'none';
      }
    }

    if (input === '') {
      optionsContainer.classList.remove('show');
    } else {
      optionsContainer.classList.add('show');
    }

  }

  // search-btn-container section ends here
//  ro-service-popup section starts here 

  window.onload = function() {
    // Wait 15 seconds before showing the popup
    setTimeout(function() {
        document.getElementById('ro-service-popup').style.display = 'flex';
    }, 15000);

    // Close the popup when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (event.target.id === 'ro-service-popup' || event.target.classList.contains('popup-close-btn')) {
            document.getElementById('ro-service-popup').style.display = 'none';
        }
    });

    // Open the popup when the whatsapp button is clicked
    document.getElementById('ro-service-expert-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default behavior
        document.getElementById('ro-service-popup').style.display = 'flex';
    });
};

//  ro-service-popup section ends here 

// read more btn starts here

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const readLessBtn = document.querySelector('.read-less-btn');
  const moreContent = document.querySelector('.more-content');

  // Open content
  readMoreBtn.addEventListener('click', function () {
    moreContent.style.display = 'block';
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline-block';
  });

  // Close using Read Less button
  readLessBtn.addEventListener('click', function () {
    closeContent();
  });

  // Close when clicking on content itself
  moreContent.addEventListener('click', function () {
    closeContent();
  });

  function closeContent() {
    moreContent.style.display = 'none';
    readMoreBtn.style.display = 'inline-block';
    readLessBtn.style.display = 'none';
  }
});
// read more btn ends here

// blogs starts here 

var swiper = new Swiper(".blogs-slider123", {
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
   },

breakpoints: {
          2500: {
              slidesPerView: 1,
          },
          2500: {
              slidesPerView: 2,
          },
          2500: {
              slidesPerView: 3,
          },
      },
});

// blogs ends here 

// faq starts here

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});

// faq ends here


// header menu section starts here    

var swiper = new Swiper(".header-water-purifiers-slider", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true, // Enable continuous loop mode
  autoplay: {
    delay: 0, // No delay for continuous scrolling
    disableOnInteraction: true, // Stop autoplay on interaction
    waitForTransition: false, // Stop immediately without waiting for transition
  },
  speed: 5000, // Speed of the marquee effect
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    2500: {
        slidesPerView: 1,
    },
    2501: {
        slidesPerView: 1,
    },
    2502: {
        slidesPerView: 1,
    },
  },
  // Prevent sliding on touch interaction
  allowTouchMove: true,
  on: {
    touchStart: function () {
      swiper.autoplay.stop(); // Stop autoplay immediately when touched
    },
    touchEnd: function () {
      swiper.allowTouchMove = true; // Re-enable touch sliding after interaction
    }
  }
});

// Stop autoplay on touch and prevent sliding to the next image
swiper.el.addEventListener('touchstart', function() {
  swiper.autoplay.stop(); // Stop autoplay immediately on touch
  swiper.allowTouchMove = false; // Temporarily disable touch slide
});

// Re-enable touch movement after touch is released
swiper.el.addEventListener('touchend', function() {
  swiper.allowTouchMove = true; // Re-enable touch slide after touch ends
});


// hheader-water-purifiers ends here
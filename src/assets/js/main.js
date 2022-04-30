// dark and light mode

let lightIcon = document.querySelector('#light');
let darkIcon = document.querySelector('#dark');
let htmlTag = document.getElementById('html');

lightIcon.addEventListener('click', function () {
    htmlTag.classList.remove('dark')
})

darkIcon.addEventListener('click', function () {
    htmlTag.classList.add('dark')
})

// waypointjs

let navSection = document.getElementById('nav');
let startbtn = document.getElementById('start-btn');

var waypoint = new Waypoint({
    element: document.getElementById('about-section'),
    handler: function (direction) {
        if(direction === 'down'){
            navSection.classList.add('animate__fadeInDown');
            startbtn.classList.add('hidden');
            console.log(direction);
        } 
        if(direction === 'up'){
            navSection.classList.remove('animate__fadeInDown');
            startbtn.classList.remove('hidden');

            console.log(direction);

        }
    },
    offset: '75%'
})

// swiper js

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        // dynamicBullets: true,
        // clickable: true,
    },
    autoplay: {
        delay: 1000,
    }
});

// scrollreveal start

const sr = ScrollReveal({
    distance: '60px',
    origin: 'top',
    duration: 2500,
    delay: 300,
    reset: true
})

// navbar


// home section
sr.reveal('.home__title')
sr.reveal('.home__subtitle', { delay: 400 })
sr.reveal('.home__elec', { delay: 500 })
sr.reveal('.home_img', { delay: 600 })
sr.reveal('.home__car-name', { delay: 700, interval: 100, origin: 'bottom' })
sr.reveal('.home_start_btn', { delay: 720, origin: 'bottom' })

// about section
sr.reveal('.about_left', { origin: 'left' })
sr.reveal('.about_right', { origin: 'right' })

// popular section
sr.reveal('.popular_title', { origin: 'top' })


sr.reveal('.more_feature_title', { origin: 'top' })
sr.reveal('.features_img', { origin: 'bottom', delay: 200 })
sr.reveal('.feature_one', { origin: 'top', delay: 300 })
sr.reveal('.feature_two', { origin: 'top', delay: 500 })
sr.reveal('.feature_three', { origin: 'top', delay: 700 })

// feature section
sr.reveal('.feature_img', { delay: 200, interval: 100, origin: 'top' })
sr.reveal('.feature_images', { delay: 350, interval: 350, origin: 'top' })

sr.reveal('.offer_left', { origin: 'left' })
sr.reveal('.offer_right', { origin: 'right' })

//footer 

sr.reveal('.logo-img', { delay: 200, interval: 100, origin: 'top' })
sr.reveal('.footer', { delay: 400, interval: 100, origin: 'top' })

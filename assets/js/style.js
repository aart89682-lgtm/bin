
// منع التحميل المزدوج للصور
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => imageObserver.observe(img));
});

// loding//
// window.addEventListener("load", function () {
//     setTimeout(() => {
//         document.getElementById("loading-screen").classList.add("hide-small-icons");

//         setTimeout(() => {
//             document.getElementById("loading-screen").classList.add("show-logo");

//             setTimeout(() => {
//                 document.getElementById("loading-screen").style.opacity = "0";
//                 setTimeout(() => {
//                     document.getElementById("loading-screen").style.display = "none";
//                 }, 150);
//             }, 150);
//         }, 150);
//     }, 200);
// });
// // loding//

// header
document.addEventListener("DOMContentLoaded", function() {

    const isHomePage = window.location.pathname.endsWith("index.html") ||
                      window.location.pathname === "/";

    const nav = document.querySelector("header nav");
    const header = document.querySelector(".hed");
    const englishLink = document.querySelector(".change-en");
    const menuBtn = document.getElementById("menu-btn");


    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header?.classList.add("scrolled");
            if (englishLink) englishLink.style.color = "var(--Primary-Normal)";
            if (menuBtn) menuBtn.style.color = "#131A43";


            if (isHomePage && nav) {
                nav.style.padding = "1rem";
            }
        } else {
            header?.classList.remove("scrolled");
            if (englishLink) englishLink.style.color = "white";
            if (menuBtn) menuBtn.style.color = "#c1c7eb";


            if (isHomePage && nav) {
                nav.style.padding = "2rem";
            }
        }
    });

    if (isHomePage && nav) {
        nav.style.padding = "2rem";
    }

    window.onload = function() {
        window.scrollTo(0, 0);
    };
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

// Mobile menu toggle
if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        menuBtn.classList.add("hidden");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("hidden");
    });
}
// header

// sleder
const swiper = new Swiper('.hero-swiper', {
    effect: 'fade',
    loop: true,
    speed: 1200,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});
// sleder


// asked-quation//
function toggleAnswer(element) {
    const allQuestionBoxes = document.querySelectorAll(".question-box");
    allQuestionBoxes.forEach(box => {
        if (box !== element) {
            box.querySelector("p").classList.remove("show");
            box.querySelector(".arrow").classList.remove("rotate");
        }
    });
    const answer = element.querySelector("p");
    const arrow = element.querySelector(".arrow");
    answer.classList.toggle("show");
    arrow.classList.toggle("rotate");
}
// asked-quation//

// // form-date//
// flatpickr("#Business-date", {
//     // enableTime: true,
//     dateFormat: "Y-m-d  ",
//     locale: "ar",
//     allowInput: true,
//     defaultDate: "2025-01-01 ",
// });
// // form-date//







document.getElementById('languageSwitcher').addEventListener('change', function () {
    const lang = this.value;

    fetch("{{ route('switch.lang') }}", {
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lang: lang })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                location.reload();
            }
        });
});



















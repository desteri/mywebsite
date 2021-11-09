'use strict';

function navDrop() {
    let header = document.querySelector('header');
    let shop = document.querySelector('.shop');

    shop.addEventListener('click', (event) => {
        event.preventDefault();
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0.1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

navDrop();

function burgerMenu() {
    let burger = document.querySelector('.burger');
    let close = document.querySelector('.sidebar__cross');

    burger.addEventListener('click', () => {
        document.querySelector('.sidebar').style.width = '270px';
    });

    close.addEventListener('click', () => {
        document.querySelector('.sidebar').style.width = '0';
    });
}

burgerMenu();

function accordionToggle() {
    let accordion = document.querySelectorAll('.accordion__item');

    accordion.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

accordionToggle();

function getVideo() {
    let videoLink = document.querySelector('.video__link');
    let video = document.querySelector('.video');

    videoLink.addEventListener('click', (e) => {
        e.preventDefault();
        video.classList.toggle('tool');
    });
}

getVideo();

// function getWorks() {
    
//     'use strict';

//     let clickPlus = document.querySelector('.featuredwork .plus');
//     let work = document.getElementsByClassName('work__image');
//     let workImg = document.querySelectorAll('.work__image img');
//     let workCont = document.querySelectorAll('.work__image .context');
//     let next = document.querySelector('.work__modal .circle__right');
//     let prev = document.querySelector('.work__modal .circle__left');
    
//     clickPlus.addEventListener('click', (event) => {

//         event.preventDefault();

//         for (let i = 0; i < work.length; i++) {
        
//             if (work[i].style.display === 'block' && 
//                 workImg[i].style.display === 'block' &&
//                 workCont[i].style.display === 'block' &&
//                 next.style.display === 'block' &&
//                 prev.style.display === 'block') {
                
//                     work[i].style.display = 'none';
//                     workImg[i].style.display = 'none';
//                     workCont[i].style.display = 'none';
//                     next.style.display = 'none';
//                     prev.style.display = 'none';
                
//             } else {
//                 work[i].style.display = 'block';
//                 workImg[i].style.display = 'block';
//                 workCont[i].style.display = 'block';
//                 next.style.display = 'block';
//                 prev.style.display = 'block';
//             }
            
//         }

//         overlay.style.display = 'block';
//         next.style.display = 'block';
//         prev.style.display = 'block';

//     });

//     closeX.addEventListener('click', (event) => {

//         event.preventDefault();

//         for (let i = 0; i < work.length; i++) {
        
//             if (work[i].style.display === 'none' && 
//                 workImg[i].style.display === 'none' &&
//                 workCont[i].style.display === 'none' && 
//                 next.style.display === 'block' &&
//                 prev.style.display === 'block') {
                
//                     work[i].style.display = 'block';
//                     workImg[i].style.display = 'block';
//                     workCont[i].style.display = 'block';
//                     next.style.display = 'block';
//                     prev.style.display = 'block';
                
//             } else {
//                 work[i].style.display = 'none';
//                 workImg[i].style.display = 'none';
//                 workCont[i].style.display = 'none';
//                 next.style.display = 'none';
//                 prev.style.display = 'none';
//             }
            
//         }

//         overlay.style.display = 'none';

//     });

//     let slideIndex = 1;
//     showSlides(slideIndex);

//     next.addEventListener('click', () => {
//         plusSlides(1);
//     });

//     prev.addEventListener('click', () => {
//         plusSlides(-1);
//     });

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     function showSlides(n) {

//         if (n > work.length) {
//             slideIndex = 1;
//         }

//         if (n < 1) {
//             slideIndex = work.length;
//         }

//         for (let i = 0; i < work.length; i++) {
//             work[i].style.display = "none";
//         }
        
//         work[slideIndex-1].style.display = "block";

//     }

// }

// getWorks();

function hire() {
    let hire = document.querySelector('.hire .btn');

    hire.addEventListener('click', (e) => {
        e.preventDefault();
    });
}

hire();

// function getPortfolio() {
    
//     'use strict';

//     let clickArrowOne = document.querySelector('.prtf__one .circle__one');
//     let clickArrowTwo = document.querySelector('.prtf__two .circle__one');
//     let clickArrowThree = document.querySelector('.prtf__three .circle__one');
//     let clickArrowFour = document.querySelector('.prtf__four .circle__one');
//     let clickArrowFive = document.querySelector('.prtf__five .circle__one');
//     let clickArrowSix = document.querySelector('.prtf__six .circle__one');
//     let clickArrowSeven = document.querySelector('.prtf__seven .circle__one');
//     let clickArrowEight = document.querySelector('.prtf__eight .circle__one');
//     let prtfOne = document.querySelector('.prtf__img_one');
//     let prtfTwo = document.querySelector('.prtf__img_two');
//     let prtfThree = document.querySelector('.prtf__img_three');
//     let prtfFour = document.querySelector('.prtf__img_four');
//     let prtfFive = document.querySelector('.prtf__img_five');
//     let prtfSix = document.querySelector('.prtf__img_six');
//     let prtfSeven = document.querySelector('.prtf__img_seven');
//     let prtfEight = document.querySelector('.prtf__img_eight');
//     let linkSearch = document.querySelectorAll('.portfolio__item .circle__two a');

//     linkSearch.forEach((entry) => {
//        entry.addEventListener('click', (event) => {
//             event.preventDefault();
//        });       
//     });

//     clickArrowOne.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfOne.style.display = 'block';

//     });

//     clickArrowTwo.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfTwo.style.display = 'block';

//     });

//     clickArrowThree.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfThree.style.display = 'block';

//     });

//     clickArrowFour.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfFour.style.display = 'block';

//     });

//     clickArrowFive.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfFive.style.display = 'block';

//     });

//     clickArrowSix.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfSix.style.display = 'block';

//     });

//     clickArrowSeven.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfSeven.style.display = 'block';

//     });

//     clickArrowEight.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'block';
//         prtfEight.style.display = 'block';

//     });

//     closeX.addEventListener('click', (event) => {

//         event.preventDefault();

//         overlay.style.display = 'none';
//         prtfOne.style.display = 'none';
//         prtfTwo.style.display = 'none';
//         prtfThree.style.display = 'none';
//         prtfFour.style.display = 'none';
//         prtfFive.style.display = 'none';
//         prtfSix.style.display = 'none';
//         prtfSeven.style.display = 'none';
//         prtfEight.style.display = 'none';

//     });

// }

// getPortfolio();

function reviews() {
    let reviews = document.querySelectorAll('.reviews__item');
    let prev = document.querySelector('.slider__left');
    let next = document.querySelector('.slider__right');
    let dots = document.querySelectorAll('.dot');

    let slideIndex = 1;
    showSlides(slideIndex);

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {

        if (n > reviews.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = reviews.length;
        }

        for (let i = 0; i < reviews.length; i++) {
            reviews[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        reviews[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}

reviews();

function getPrice() {
    //Создать функцию!
    let price = document.querySelectorAll('.price .btn');

    price.forEach(item => {
        item.addEventListener('click', (e) => {
             e.preventDefault();
        });       
    });
}

getPrice();

function subscribe() {
    let subscribeInput = document.querySelector('.subscribe__form input');
    let subscribe = document.querySelector('.subscribe__form .btn');

    subscribe.addEventListener('click', (e) => {
        e.preventDefault();
        if (subscribeInput.value === "") {
            alert('Заполните поля!')
        } else {
            alert('Подписка оформлена!');
        }
    });
}

subscribe();

function blogs() {
    let blogs = document.querySelectorAll('.blogs .btn');

    blogs.forEach(item => {
        item.addEventListener('click', (e) => {
             e.preventDefault();
        });       
    });
}

blogs();

function getMap() {
    let mapLink = document.querySelector('.map__link');
    let map = document.querySelector('.map');

    mapLink.addEventListener('click', (e) => {
        e.preventDefault();
        map.classList.toggle('tool');
    });
}

getMap();

function post() {
    let post = document.querySelector('.footer__form .btn');
    let postName = document.querySelector('.footer__form form #name');
    let postTel = document.querySelector('.footer__form form #tel');
    let postMsg = document.querySelector('.footer__form textarea'); 

    post.addEventListener('click', (e) => {
        e.preventDefault();
        if (postName.value === "" ||
            postTel.value === "" ||
            postMsg.value === "") {
            alert('Заполните поля!');
        } else {
            alert('Сообщение отправлено!');
        }
    });
}

post();
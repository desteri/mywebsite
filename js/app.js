function navMenu() {

    'use strict';
    
    let header = document.querySelector('.header');

    shop.addEventListener('click', (event) => {
        event.preventDefault();
    });
    
    window.addEventListener('scroll', () => {
        
        if (document.body.scrollTop > 50 || 
            document.documentElement.scrollTop > 50) {
            header.classList.add('header__fixed');
            

        } else {
            header.classList.remove('header__fixed');
        }

    });

}

navMenu();

function accordionToggle() {
    
    'use strict';

    let accordion = document.querySelectorAll('.accordion__item');

    accordion.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

accordionToggle();

// function getVideo() {
    
// }

// getVideo();

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

// function getHireUs() {
    
//     'use strict';

//     let hireus = document.querySelector('.hireus__inner a');

//     hireus.addEventListener('click', (event) => {
//         event.preventDefault();
//     });

// }

// getHireUs();

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

// function getTestimonial() {
    
//     'use strict';

//     let testim = document.querySelectorAll('.ourtestim__testimonial');
//     let next = document.querySelector('.ourtestim__inner .circle__right');
//     let prev = document.querySelector('.ourtestim__inner .circle__left');

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

//         if (n > testim.length) {
//             slideIndex = 1;
//         }

//         if (n < 1) {
//             slideIndex = testim.length;
//         }

//         for (let i = 0; i < testim.length; i++) {
//             testim[i].style.display = "none";
//         }
        
//         testim[slideIndex-1].style.display = "block";

//     }
// }

// getTestimonial();

// function getPrice() {
//     //Создать функцию!
// }

// getPrice();

// function getSub() {
    
//     'use strict';

//     let sub = document.querySelector('.subscribeus__inner form a');
//     let subInput = document.querySelector('.subscribeus__inner form input');

//     sub.addEventListener('click', (event) => {
//         event.preventDefault();

//         if (subInput.value !== "") {
//             alert('Подписка оформлена!');
//         } else {
//             alert('Заполните поля!');
//         }
//     });

// }

// getSub();

// function getBlogs() {
    
//     'use strict';

//     let blogs = document.querySelectorAll('.blogs .blogs__item');

//     blogs.forEach((entry) => {
//         entry.addEventListener('click', (event) => {
//              event.preventDefault();
//         });       
//     });

// }

// getBlogs();

function getMap() {
    
    'use strict';

    let mapLink = document.querySelector('.map__link');
    let map = document.querySelector('.map');

    mapLink.addEventListener('click', (e) => {
        e.preventDefault();
        map.classList.toggle('tool');
    });

}

getMap();

// function getPost() {
    
//     'use strict';

//     let post = document.querySelector('.infiniti__inner form a');
//     let postInputName = document.querySelector('.infiniti__inner form #name');
//     let postInputTel = document.querySelector('.infiniti__inner form #tel');
//     let postTextArea = document.querySelector('.infiniti__inner form textarea'); 

//     post.addEventListener('click', (event) => {

//         event.preventDefault();

//         if (postInputName.value !== "" &&
//          postInputTel.value !== "" &&
//          postTextArea.value !== "") {
//             alert('Сообщение отправлено!');
//         } else {
//             alert('Заполните поля!');
//         }

//     });

// }

// getPost();

// function getIcons() {
    
//     'use strict';

//     let icons = document.querySelectorAll('.info__icons a');
//     let footer = document.querySelector('.footer a');

//     icons.forEach((entry) => {
//         entry.addEventListener('click', (event) => {
//              event.preventDefault();
//         });       
//     });

//     footer.addEventListener('click', (event) => {
//         event.preventDefault();
//     });

// }

// getIcons();
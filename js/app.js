'use strict';

function getScroll() {
    document.querySelectorAll('.scroll[href^="#"]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let href = item.getAttribute('href').substring(1);
            const scrollTarget = document.querySelector('#' + href);
            const topOffset = 120;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });           
}

getScroll();

function navDrop() {
    let header = document.querySelector('header');
    let shop = document.querySelectorAll('.shop');

    shop.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
        });
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

function getDetails() {
    let btn = document.querySelector('.about__info .btn');
    let visibleOverlay = document.querySelector('.details__modal .overlay');
    let visibleModal = document.querySelector('.modal');
    let closeModal = document.querySelector('.modal__more .modal__cross');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        visibleModal.style.display = 'block';
        visibleOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    const click = () => {
        visibleModal.style.display = 'none';
        visibleOverlay.style.display = 'none';
        document.body.style.overflow = 'visible';
    };

    closeModal.addEventListener('click', click);

    visibleOverlay.addEventListener('click', click);
}

getDetails();

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

function getWorks() {
    let getModal = document.querySelectorAll('.works__link');
    let visibleOverlay = document.querySelector('.works > .overlay');
    let visibleModal = document.querySelectorAll('.works__modal');
    let iframeModal = document.querySelectorAll('.yt_player_iframe');
    let closeModal = document.querySelectorAll('.works__modal .modal__cross');

    getModal.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            visibleOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';

            if (item.innerHTML == "FPS") {
                visibleModal[0].style.display = 'block';
            } else if (item.innerHTML == "RTS") {
                visibleModal[1].style.display = 'block';
            } else if (item.innerHTML == "RPG") {
                visibleModal[2].style.display = 'block';
            }
        });
    });

    const click = () => {
        visibleOverlay.style.display = 'none';
        document.body.style.overflow = 'visible';

        for (let i = 0; i < visibleModal.length; i++) {
            visibleModal[i].style.display = 'none';
        }

        iframeModal.forEach(item => {
            item.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    };

    closeModal.forEach(item => {
        item.addEventListener('click', click);
    });

    visibleOverlay.addEventListener('click', click);
}

getWorks();

function hire() {
    let hire = document.querySelector('.hire .btn');
    let hireModal = document.querySelector('.hire__modal');
    let closeModal = document.querySelector('.hire__modal .modal__cross');
    let visibleOverlay = document.querySelector('.hire > .overlay');

    hire.addEventListener('click', (e) => {
        e.preventDefault();
        visibleOverlay.style.zIndex = '8';
        visibleOverlay.style.position = 'fixed';
        visibleOverlay.style.backgroundColor = '#000000e6';
        hireModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    const click = () => {
        visibleOverlay.style.zIndex = 'auto';
        visibleOverlay.style.position = 'absolute';
        visibleOverlay.style.backgroundColor = '#1e1e1eb3';
        hireModal.style.display = 'none';
        document.body.style.overflow = 'visible';
    };

    closeModal.addEventListener('click', click);

    visibleOverlay.addEventListener('click', click);
}

hire();

function getPortfolio() {
    let getModal = document.querySelectorAll('.portMod');
    let visibleOverlay = document.querySelector('.portfolio > .overlay');
    let visibleModal = document.querySelectorAll('.modal__product');
    let closeModal = document.querySelectorAll('.modal__product .modal__cross');

    getModal.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            visibleOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            switch (i) {
                case 0:
                    visibleModal[0].style.display = 'block';
                    break;
                case 1:
                    visibleModal[1].style.display = 'block';
                    break;
                case 2:
                    visibleModal[2].style.display = 'block';
                    break;
                case 3:
                    visibleModal[3].style.display = 'block';
                    break;
                case 4:
                    visibleModal[4].style.display = 'block';
                    break;
                case 5:
                    visibleModal[5].style.display = 'block';
                    break;
                case 6:
                    visibleModal[6].style.display = 'block';
                    break;
                case 7:
                    visibleModal[7].style.display = 'block';
                    break;
                case 8:
                    visibleModal[8].style.display = 'block';
                    break;
                case 9:
                    visibleModal[9].style.display = 'block';
                    break;
                case 10:
                    visibleModal[10].style.display = 'block';
                    break;
                case 11:
                    visibleModal[11].style.display = 'block';
                    break;

                default:
                    alert('Что-то пошло не так..');
                    break;
            }
        });
    });

    const click = () => {
        visibleOverlay.style.display = 'none';
        document.body.style.overflow = 'visible';

        for (let i = 0; i < visibleModal.length; i++) {
            visibleModal[i].style.display = 'none';
        }
    };

    closeModal.forEach(item => {
        item.addEventListener('click', click);
    });

    visibleOverlay.addEventListener('click', click);
}

getPortfolio();

function portfolioSlider() {
    let prev = document.querySelectorAll('.modal__product .slider__left'),
        next = document.querySelectorAll('.modal__product .slider__right'),
        sliderOne = document.querySelectorAll(".slider-one img"),
        sliderTwo = document.querySelectorAll(".slider-two img"),
        sliderThree = document.querySelectorAll(".slider-three img"),
        sliderFour = document.querySelectorAll(".slider-four img"),
        sliderFive = document.querySelectorAll(".slider-five img"),
        sliderSix = document.querySelectorAll(".slider-six img"),
        sliderSeven = document.querySelectorAll(".slider-seven img"),
        sliderEight = document.querySelectorAll(".slider-eight img"),
        sliderNine = document.querySelectorAll(".slider-nine img"),
        sliderTen = document.querySelectorAll(".slider-ten img"),
        sliderEleven = document.querySelectorAll(".slider-eleven img"),
        sliderTwelve = document.querySelectorAll(".slider-twelve img"),
        arrSlide = [
            sliderOne, sliderTwo, sliderThree, 
            sliderFour, sliderFive, sliderSix, 
            sliderSeven, sliderEight, sliderNine, 
            sliderTen, sliderEleven, sliderTwelve
        ];

    let slideIndex = 1;
    showSlides(slideIndex);

    prev.forEach(item => {
        item.addEventListener('click', () => {
            plusSlides(-1)
        });
    });

    next.forEach(item => {
        item.addEventListener('click', () => {
            plusSlides(1)
        });
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        for (let i = 0; i < arrSlide.length; i++) {
            if (n > arrSlide[i].length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = arrSlide[i].length;
            }

            for (let image of arrSlide[i]) {
                image.style.display = "none";
            }     

            arrSlide[i].item(slideIndex - 1).style.display = "block";
        }
    }
}

portfolioSlider();

function getMeter() {
    document.querySelectorAll('.meter').forEach(item => {
        let meterTop = item.getBoundingClientRect().top;

        let onScroll = () => {
            if(window.scrollY > meterTop - window.innerHeight / 2) {
                window.removeEventListener('scroll', onScroll);
                item.classList.toggle('loadMeter');
            }
        }

        window.addEventListener('scroll', onScroll);
    });
}

getMeter();

function getAchieve() {
    document.querySelectorAll('.achieve__number').forEach(item => {
        let	numberTop = item.getBoundingClientRect().top;
        let	start = +item.innerHTML;
        let end = +item.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if(window.scrollY > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function() {
                    item.innerHTML = ++start;
                    if(start == end) {
                        clearInterval(interval);
                    }
                }, 10);
            }
        });
    });
}

getAchieve();

function reviews() {
    let reviews = document.querySelectorAll('.reviews__item');
    let prev = document.querySelector('.reviews .slider__left');
    let next = document.querySelector('.reviews .slider__right');

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

        reviews[slideIndex - 1].style.display = "block";
    }
}

reviews();


function getPrice() {
    let priceBtn = document.querySelectorAll('.add');
    let priceCost = document.querySelectorAll('.number');
    let priceTitle = document.querySelectorAll('.price__title');        

    priceBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let li = document.createElement('li');

            li.innerHTML = `<div class="shop__item">
                    <h5 class="shop__title">${priceTitle[0].innerHTML}</h5>
                    <p class="shop__price">
                        <span>${priceCost[0].innerHTML}</span> в месяц<i class="fas fa-trash"></i>
                    </p>
                </div>`;

            let ul = document.querySelectorAll('.shop__ul');

            ul.forEach(item => {
                item.appendChild(li);
            });

            delPrice();
            updPrice();
            sumPrice();
        });
    });
}

getPrice();

function delPrice() {
    let trash = document.querySelectorAll('.fa-trash');

    trash.forEach(item => {
        item.addEventListener('click', function () {
            this.parentNode.parentNode.remove();

            updPrice();
        })
    });
}

function updPrice() {
    let update = document.querySelectorAll('.shop__item').length;
    document.querySelectorAll('.shop__count').forEach(item => {
        item.innerHTML = update;
    });
}

function sumPrice() {
    let priceCost = document.querySelectorAll('.number');
    let count = 0;

    for (let i = 0; i < priceCost.length; i++) {
        count += (+priceCost[i].textContent);
    }

    document.querySelector('.total').innerHTML = `$${count}`;
}

function subscribe() {
    let subscribeInput = document.querySelector('.subscribe__form input');
    let subscribe = document.querySelector('.subscribe__form .btn');

    subscribe.addEventListener('click', (e) => {
        e.preventDefault();
        if (subscribeInput.value === "") {
            alert('Заполните поля!')
        } else {
            alert('Подписка оформлена!');
            subscribeInput.value = "";
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
            postName.value = "";
            postTel.value = "";
            postMsg.value = "";
        }
    });
}

post();
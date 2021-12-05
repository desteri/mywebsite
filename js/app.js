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

function getCheckShop() {
    let shop = document.querySelectorAll('.shop');
    let visibleOverlay = document.querySelector('.modal__check .overlay');
    let visibleModal = document.querySelector('.check__content');
    let closeModal = document.querySelector('.check__content .modal__cross');

    shop.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            visibleModal.style.display = 'block';
            visibleOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.querySelector('.sidebar').style.width = '0';
        });
    });

    let submit = document.querySelector('.check__right .btn');
    let submitFName = document.querySelector('.check__right form #fname');
    let submitSName = document.querySelector('.check__right form #sname');
    let submitTel = document.querySelector('.check__right form #tel');
    let submitMail = document.querySelector('.check__right form #email');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (submitFName.value === "" ||
            submitSName.value === "" ||
            submitTel.value === "" ||
            submitMail.value === "") {
            alert('Заполните поля!');
        } else {
            alert('Сообщение отправлено!');
            submitFName.value = "";
            submitSName.value = "";
            submitTel.value = "";
            submitMail.value = "";
        }
    });

    const click = () => {
        visibleModal.style.display = 'none';
        visibleOverlay.style.display = 'none';
        document.body.style.overflow = 'visible';
    };

    closeModal.addEventListener('click', click);

    visibleOverlay.addEventListener('click', click);
}

getCheckShop();

function getDetails() {
    const details = document.querySelector('.modal');

    const render = async () => {
        const result = await fetch('http://localhost:3000/details');
        const detailsItem = await result.json();

        let detailsItemTemplate = '';

        for (let prop of detailsItem) {
            detailsItemTemplate += `
                <h2 class="modal__title">${prop.title}</h2>

                <div class="modal__more">
                    <div class="container">
                        <p class="modal__text">${prop.text}</p>

                        <img src="${prop.imgOne}" alt="company">

                        <p class="modal__text">${prop.text}</p>

                        <img src="${prop.imgTwo}" alt="company">

                        <p class="modal__text">${prop.textMore}</p>

                        <img src="${prop.imgThree}" alt="company">
                    </div>

                    <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                </div>
            `
        }

        details.insertAdjacentHTML('afterbegin', detailsItemTemplate);

        function getDetailsModal() {
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
        
        getDetailsModal();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getDetails();

function getAccordion() {
    const accordion = document.querySelector('.about__accordion');

    const render = async () => {
        const result = await fetch('http://localhost:3000/accordion');
        const accordionItem = await result.json();

        let accordionItemTemplate = '';

        for (let prop of accordionItem) {
            accordionItemTemplate += `
                <li class="accordion__item">
                    <div class="accordion__header">
                        <div class="accordion__arrow">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <h4 class="accordion__title">${prop.title}</h4>
                    </div>

                    <p class="accordion__content">${prop.text}</p>
                </li>
            `
        }

        accordion.insertAdjacentHTML('afterbegin', accordionItemTemplate);

        function accordionToggle() {
            let accordion = document.querySelectorAll('.accordion__item');

            accordion.forEach((item) => {
                item.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
        }

        accordionToggle();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getAccordion();

function getAbout() {
    const moreAbout = document.querySelector('.moreabout__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/moreabout');
        const aboutItem = await result.json();

        let aboutItemTemplate = '';

        for (let prop of aboutItem) {
            aboutItemTemplate += `
                <li class="moreabout__item">
                    <div class="moreabout__header">
                        <div class="icon__circle">
                            <i class="${prop.icon}"></i>
                        </div>

                        <h3 class="moreabout__title">${prop.title}</h3>
                    </div>

                    <p class="moreabout__text">${prop.text}</p>
                </li>
            `
        }

        moreAbout.insertAdjacentHTML('afterbegin', aboutItemTemplate);
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getAbout();

function getVideo() {
    let videoLink = document.querySelector('.video__link');
    let video = document.querySelector('.video');

    videoLink.addEventListener('click', (e) => {
        e.preventDefault();
        video.classList.toggle('tool');
    });
}

getVideo();

function getWorksModal() {
    const worksModal = document.querySelector('.works__modal__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/worksModal');
        const worksModalItem = await result.json();

        let worksModalItemTemplate = '';

        for (let prop of worksModalItem) {
            worksModalItemTemplate += `
                <div class="works__modal">
                    <h2 class="modal__title">${prop.title}</h2>
                    <iframe class="yt_player_iframe" width="100%" height="500"
                        src="${prop.src}" frameborder="0"
                        allowfullscreen></iframe>

                    <div class="modal__info">
                        <div class="container">
                            <p class="modal__text">${prop.text}</p>
                            <img src="${prop.imgOne}" alt="service example">
                            <p class="modal__text">${prop.text}</p>
                            <img src="${prop.imgTwo}" alt="service example">
                            <p class="modal__text">${prop.text}</p>
                            <p><a class="btn fully" href="${prop.href}" target="_blank">Подробнее</a></p>
                        </div>
                    </div>

                    <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                </div>
            `
        }

        worksModal.insertAdjacentHTML('afterbegin', worksModalItemTemplate);
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getWorksModal();

function getWorks() {
    const works = document.querySelector('.works__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/works');
        const worksItem = await result.json();

        let worksItemTemplate = '';

        for (let prop of worksItem) {
            worksItemTemplate += `
                <li class="works__item">
                    <img src="${prop.img}" alt="service">

                    <div class="overlay">
                        <a class="works__link" href="#">${prop.text}</a>
                    </div>
                </li>
            `
        }

        works.insertAdjacentHTML('afterbegin', worksItemTemplate);

        function getWorksModal() {
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

        getWorksModal();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getWorks();

function getServices() {
    const services = document.querySelector('.services__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/services');
        const servicesItem = await result.json();

        let servicesItemTemplate = '';

        for (let prop of servicesItem) {
            servicesItemTemplate += `
                <li class="services__item">
                    <i class="${prop.icon}"></i>
                    <h3 class="services__title">${prop.title}</h3>
                    <p class="services__text">${prop.text}</p>
                </li>
            `
        }

        services.insertAdjacentHTML('afterbegin', servicesItemTemplate);
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getServices();

function getHire() {
    const hire = document.querySelector('.modal__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/hire');
        const hireItem = await result.json();

        let hireItemTemplate = '';

        for (let prop of hireItem) {
            hireItemTemplate += `
                <div class="modal__card">
                    <img src="${prop.img}" alt="team">
                    <h3 class="modal__name">${prop.name}</h3>
                    <p class="modal__pos">${prop.pos}</p>

                    <ul class="social flex">
                        <li>
                            <a class="hire__link" href="${prop.facebook}"><i
                                    class="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a class="hire__link" href="${prop.twitter}"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a class="hire__link" href="${prop.instagram}"><i
                                    class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            `
        }

        hire.insertAdjacentHTML('afterbegin', hireItemTemplate);

        function getHireModal() {
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

        getHireModal();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getHire();

function getPortfolioModalContent() {
    const portfolioModalContent = document.querySelector('.portfolio__modal');

    const render = async () => {
        const result = await fetch('http://localhost:3000/portfolioContent');
        const portfolioModalContentItem = await result.json();

        let portfolioModalContentItemTemplate = '';

        for (let prop of portfolioModalContentItem) {
            portfolioModalContentItemTemplate += `
                <li class="modal__product">
                    <div class="modal__img flex aic ${prop.slider}">
                        <button class="slider__left" type="button"><i class="fas fa-chevron-left"></i></button>
                        <img src="${prop.imgOne}" alt="about product">
                        <img src="${prop.imgTwo}" alt="about product">
                        <img src="${prop.imgThree}" alt="about product">
                        <img src="${prop.imgFour}" alt="about product">
                        <img src="${prop.imgFive}" alt="about product">
                        <button class="slider__right" type="button"><i class="fas fa-chevron-right"></i></button>
                    </div>

                    <h3 class="modal__name-game">${prop.title}</h3>
                    <p class="modal__text">${prop.text}</p>
                    <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                </li>
            `
        }

        portfolioModalContent.insertAdjacentHTML('afterbegin', portfolioModalContentItemTemplate);

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
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getPortfolioModalContent();

function getPortfolio() {
    const portfolio = document.querySelector('.portfolio__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/portfolio');
        const portfolioItem = await result.json();

        let portfolioItemTemplate = '';

        for (let prop of portfolioItem) {
            portfolioItemTemplate += `
                <li class="portfolio__item">
                    <img src="${prop.img}" alt="work">

                    <div class="overlay">
                        <div class="overlay__content">
                            <h3 class="portfolio__title">${prop.title}</h3>

                            <div class="portfolio__icon">
                                <a class="portfolio__link portMod" href="#"><i class="fas fa-expand-alt"></i></a>
                                <a class="portfolio__link" href="${prop.href}"
                                    target="_blank"><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </li>
            `
        }

        portfolio.insertAdjacentHTML('afterbegin', portfolioItemTemplate);

        function getPortfolioModal() {
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

        getPortfolioModal();

    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getPortfolio();

function getMeter() {
    document.querySelectorAll('.meter').forEach(item => {
        let meterTop = item.getBoundingClientRect().top;

        let onScroll = () => {
            if (window.scrollY > meterTop - window.innerHeight / 2) {
                window.removeEventListener('scroll', onScroll);
                item.classList.toggle('loadMeter');
            }
        }

        window.addEventListener('scroll', onScroll);
    });
}

getMeter();

function getAchieve() {
    const achieve = document.querySelector('.achieve__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/achieve');
        const achieveItem = await result.json();

        let achieveItemTemplate = '';

        for (let prop of achieveItem) {
            achieveItemTemplate += `
                <li class="achieve__item">
                    <span class="achieve__number" data-max="${prop.number}">0</span>
                    <p class="achieve__text">${prop.text}</p>
                </li>
            `
        }

        achieve.insertAdjacentHTML('afterbegin', achieveItemTemplate);

        function getAchieveCount() {
            document.querySelectorAll('.achieve__number').forEach(item => {
                let numberTop = item.getBoundingClientRect().top;
                let start = +item.innerHTML;
                let end = +item.dataset.max;
        
                window.addEventListener('scroll', function onScroll() {
                    if (window.scrollY > numberTop - window.innerHeight / 2) {
                        this.removeEventListener('scroll', onScroll);
                        let interval = setInterval(function () {
                            item.innerHTML = ++start;
                            if (start == end) {
                                clearInterval(interval);
                            }
                        }, 10);
                    }
                });
            });
        }
        
        getAchieveCount();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getAchieve();

function getReviews() {
    const reviews = document.querySelector('.reviews__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/reviews');
        const reviewsItem = await result.json();

        let reviewsItemTemplate = '';

        for (let prop of reviewsItem) {
            reviewsItemTemplate += `
                <li class="reviews__item">
                    <q class="reviews__text">${prop.text}</q>
                    <p class="reviews__author">${prop.author}</p>

                    <ul class="reviews__star flex">
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                    </ul>
                </li>
            `
        }

        reviews.insertAdjacentHTML('afterbegin', reviewsItemTemplate);

        function getReviewsSlider() {
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
        
        getReviewsSlider();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getReviews();

function getPrice() {
    const price = document.querySelector('.price__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/price');
        const priceItem = await result.json();

        let priceItemTemplate = '';

        for (let prop of priceItem) {
            for (let inc of prop.include) {
                priceItemTemplate += `
                    <div class="price__item">
                        <h3 class="price__title">${prop.title}</h3>

                        <div class="cost">
                            <p>
                                <span class="cost__number">
                                    $<span class="number">${prop.number}</span>
                                </span>
                                <span class="cost__text">в месяц</span>
                            </p>
                        </div>

                        <div class="include">
                            <div class="include__item"><i class="fas ${inc.iconOne}"></i>${inc.textOne}</div>
                            <div class="include__item"><i class="fas ${inc.iconTwo}"></i>${inc.textTwo}</div>
                            <div class="include__item"><i class="fas ${inc.iconThree}"></i>${inc.textThree}</div>
                        </div>
                        <a href="#" class="btn fully add">Выбрать план</a>
                    </div>
                `
            }
        }

        price.insertAdjacentHTML('afterbegin', priceItemTemplate);

        function getPriceInShop() {
            let priceBtn = document.querySelectorAll('.add');
        
            priceBtn.forEach(item => {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    let priceCost = this.parentNode.querySelectorAll('.number');
                    let priceTitle = this.parentNode.querySelectorAll('.price__title');
                    let li = document.createElement('li');
        
                    li.innerHTML = `<div class="shop__item">
                                        <h5 class="shop__title">${priceTitle[0].innerText}</h5>
                                        <p class="shop__price">
                                            $<span>${priceCost[0].innerText}</span> в месяц<i class="fas fa-trash"></i>
                                        </p>
                                    </div>`;
        
        
                    let ul = document.querySelector('.shop__ul');
                    ul.appendChild(li);
        
                    delPrice();
                    updPrice();
                    sumPrice();
                });
            });
        
            function delPrice() {
                let trash = document.querySelectorAll('.fa-trash');
        
                trash.forEach(item => {
                    item.addEventListener('click', function (e) {
                        e.preventDefault();
        
                        this.parentNode.parentNode.remove();
        
                        updPrice();
                        sumPrice();
                    })
                });
            }
        
            function updPrice() {
                let update = document.querySelectorAll('.shop__item').length;
                let count = document.querySelectorAll('.shop__count');
        
                count.forEach(item => {
                    item.innerHTML = update;
                    if (item.innerHTML == 0) {
                        item.style.display = "none";
                    } else if (item.innerHTML > 0) {
                        item.style.display = "block";
                    }
                });
            }
        
            function sumPrice() {
                let priceCost = document.querySelectorAll('.shop__price span');
                let count = 0;
        
                for (let i = 0; i < priceCost.length; i++) {
                    count += (+priceCost[i].textContent);
                }
        
                document.querySelector('.total').innerHTML = `$${count}`;
            }
        }
        
        getPriceInShop();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getPrice();

function getBrands() {
    const brands = document.querySelector('.brands__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/brands');
        const brandsItem = await result.json();

        let brandsItemTemplate = '';

        for (let prop of brandsItem) {
            brandsItemTemplate += `
                <li>
                    <a class="brands__link" href="${prop.href}" target="_blank">
                        <img src="${prop.img}" alt="${prop.alt}">
                    </a>
                </li>
            `
        }

        brands.insertAdjacentHTML('afterbegin', brandsItemTemplate);
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getBrands();

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

function getBlogsModalContent() {
    const blogsModalContent = document.querySelector('.blogs__modal__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/blogsContent');
        const blogsModalContentItem = await result.json();

        let blogsModalContentItemTemplate = '';

        for (let prop of blogsModalContentItem) {
            if (prop.id == 1) {
                blogsModalContentItemTemplate += `
                    <li class="blogs__modal">
                        <h2 class="modal__title">${prop.title}</h2>

                        <div class="modal__info">
                            <div class="container">
                                <div class="blogs__top flex aic">
                                    <div class="blogs__img">
                                        <img src="${prop.imgOne}" alt="service example">
                                    </div>

                                    <p class="modal__text">${prop.text}</p>
                                </div>

                                <div class="blogs__bottom flex aic">
                                    <p class="modal__text">${prop.text}</p>

                                    <div class="blogs__img">
                                        <img src="${prop.imgTwo}" alt="service example">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                    </li>
                `
            } else if (prop.id == 2) {
                blogsModalContentItemTemplate += `
                    <li class="blogs__modal">
                        <h2 class="modal__title">${prop.title}</h2>

                        <div class="modal__info">
                            <div class="container">
                                <div class="blogs__top flex">
                                    <div class="blogs__img">
                                        <img src="${prop.img}" alt="service example">
                                    </div>

                                    <p class="modal__text">${prop.text}</p>
                                </div>

                                <p class="modal__text">${prop.text}</p>
                            </div>

                            <iframe class="yt_player_iframe" width="100%" height="500"
                            src="${prop.src}" frameborder="0"
                            allowfullscreen></iframe>

                            <div class="container">
                                <p class="modal__text">${prop.text}</p>
                            </div>
                        </div>

                        <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                    </li>
                `
            } else if (prop.id == 3) {
                blogsModalContentItemTemplate += `
                    <li class="blogs__modal">
                        <h2 class="modal__title">${prop.title}</h2>

                        <div class="modal__info">
                            <div class="container">
                                <p class="modal__text">${prop.text}</p>
                                <img src="${prop.imgOne}" alt="service example">
                                <p class="modal__text">${prop.text}</p>
                                <img src="${prop.imgTwo}" alt="service example">
                                <p class="modal__text">${prop.text}</p>
                                <img src="${prop.imgThree}" alt="service example">
                                <p class="modal__text">${prop.text}</p>
                            </div>
                        </div>

                        <button class="modal__cross" type="button"><i class="fas fa-times"></i></button>
                    </li>
                `
            }
        }

        blogsModalContent.insertAdjacentHTML('afterbegin', blogsModalContentItemTemplate);
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getBlogsModalContent();

function getBlogs() {
    const blogs = document.querySelector('.blogs__content');

    const render = async () => {
        const result = await fetch('http://localhost:3000/blogs');
        const blogsItem = await result.json();

        let blogsItemTemplate = '';

        for (let prop of blogsItem) {
            blogsItemTemplate += `
                <li class="blogs__item">
                    <img src="${prop.img}" alt="blog">
                    <h3 class="blogs__title">${prop.title}</h3>
                    <p class="blogs__text">${prop.text}</p>
                    <a href="#" class="btn fully ${prop.number}"><i class="fas fa-arrow-right"></i></a>
                </li>
            `
        }

        blogs.insertAdjacentHTML('afterbegin', blogsItemTemplate);

        function getBlogsModal() {
            let getModal = document.querySelectorAll('.blogs__item a');
            let visibleOverlay = document.querySelector('.blogs > .overlay');
            let visibleModal = document.querySelectorAll('.blogs__modal');
            let iframeModal = document.querySelectorAll('.yt_player_iframe');
            let closeModal = document.querySelectorAll('.blogs__modal .modal__cross');

            getModal.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    visibleOverlay.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    let attr = item.getAttribute("class");

                    if (attr.includes('blog__one')) {
                        visibleModal[0].style.display = 'block';
                    } else if (attr.includes('blog__two')) {
                        visibleModal[1].style.display = 'block';
                    } else if (attr.includes('blog__three')) {
                        visibleModal[2].style.display = 'block';
                    } else {
                        console.log('no');
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

        getBlogsModal();
    };

    window.addEventListener('DOMContentLoaded', () => render());
}

getBlogs();

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
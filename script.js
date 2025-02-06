document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!");

    /*** MENU MOBILE RESPONSIVO ***/
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });

        // Fechar menu ao clicar em qualquer link dentro dele
        document.querySelectorAll(".mobile-menu a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("active");
            });
        });
    }

    /*** NAVEGAÇÃO SUAVE PARA ÂNCORAS ***/
    const linksInternos = document.querySelectorAll("a[href^='#']");

    linksInternos.forEach(link => {
        link.addEventListener("click", function (e) {
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: "smooth", block: "start" });

                if (mobileMenu.classList.contains("active")) {
                    mobileMenu.classList.remove("active");
                }
            }
        });
    });

    /*** MODO ATIVO PARA OS LINKS DO MENU ***/
    const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /*** CARROSSEL DE DEPOIMENTOS ***/
    const reviews = document.querySelectorAll(".review-card");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const dotsContainer = document.querySelector(".review-dots");

    let currentReview = 0;
    const reviewCount = reviews.length;
    const intervalTime = 5000;
    let carouselInterval;

    if (reviewCount > 0) {
        // Criar os indicadores (bolinhas)
        if (dotsContainer && reviewCount > 1) {
            for (let i = 0; i < reviewCount; i++) {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                if (i === 0) {
                    dot.classList.add("active");
                }
                dot.setAttribute("data-index", i);
                dotsContainer.appendChild(dot);
            }
        }

        const dots = document.querySelectorAll(".review-dots .dot");

        function showReview(index) {
            reviews[currentReview].classList.remove("active");
            dots[currentReview].classList.remove("active");

            currentReview = index;

            reviews[currentReview].classList.add("active");
            dots[currentReview].classList.add("active");
        }

        function nextReview() {
            let nextIndex = (currentReview + 1) % reviewCount;
            showReview(nextIndex);
        }

        function prevReview() {
            let prevIndex = (currentReview - 1 + reviewCount) % reviewCount;
            showReview(prevIndex);
        }

        if (nextArrow) {
            nextArrow.addEventListener("click", function () {
                nextReview();
                resetInterval();
            });
        }

        if (prevArrow) {
            prevArrow.addEventListener("click", function () {
                prevReview();
                resetInterval();
            });
        }

        dots.forEach((dot) => {
            dot.addEventListener("click", function () {
                const index = parseInt(this.getAttribute("data-index"));
                showReview(index);
                resetInterval();
            });
        });

        function startInterval() {
            carouselInterval = setInterval(nextReview, intervalTime);
        }

        function resetInterval() {
            clearInterval(carouselInterval);
            startInterval();
        }

        if (reviewCount > 1) {
            startInterval();
        }
    }
});

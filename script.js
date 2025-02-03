document.addEventListener("DOMContentLoaded", function () {
    /*** MENU MOBILE ***/
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });

        // Fecha o menu ao clicar em um link
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("active");
            });
        });
    }

    /*** NAVEGAÇÃO SUAVE PARA "PROJETOS" ***/
    const linkProjetos = document.querySelector("#link-projetos");
    const projetosSection = document.querySelector("#projetos");

    if (linkProjetos && projetosSection) {
        linkProjetos.addEventListener("click", function (e) {
            e.preventDefault();
            projetosSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // Fecha o menu mobile ao clicar no link (se estiver aberto)
            if (mobileMenu.classList.contains("active")) {
                mobileMenu.classList.remove("active");
            }
        });
    }

    /*** CARROSSEL DE DEPOIMENTOS ***/
    const reviews = document.querySelectorAll(".review-card");
    if (reviews.length > 1) {
        let currentReview = 0;
        const reviewCount = reviews.length;
        const intervalTime = 5000; // 5 segundos

        setInterval(function () {
            // Remove 'active' do depoimento atual
            reviews[currentReview].classList.remove("active");

            // Calcula o índice do próximo depoimento
            currentReview = (currentReview + 1) % reviewCount;

            // Adiciona 'active' ao próximo depoimento
            reviews[currentReview].classList.add("active");
        }, intervalTime);
    }
});

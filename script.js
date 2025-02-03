document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const linkProjetos = document.querySelector('#link-projetos');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});

const linkProjetos = document.querySelector('#link-projetos');

linkProjetos.addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const projetosSection = document.querySelector('#projetos');

    projetosSection.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
        block: 'center'     // Centraliza a seção verticalmente no viewport
    });
});


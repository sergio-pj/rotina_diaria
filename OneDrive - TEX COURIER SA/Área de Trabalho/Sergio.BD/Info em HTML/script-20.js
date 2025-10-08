// Toggle do menu mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Validação e envio do formulário
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('Obrigado por se inscrever! Você receberá novidades em breve.');
        document.getElementById('email').value = '';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
    });
});
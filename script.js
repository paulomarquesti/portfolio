// Rolagem suave para as seções ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if(hash.startsWith("#")) {
            e.preventDefault();
            document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
        }
    });
});
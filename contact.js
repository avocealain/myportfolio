document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Envoyer moi le mail
        const subject = encodeURIComponent("Message de " + name);
        const body = encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\n" + message);
        window.location.href = `mailto:avocealain1@gmail.com?subject=${subject}&body=${body}`;
    });
});
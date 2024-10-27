document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribeForm");
    const contactForm = document.getElementById("contactForm");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
            subscribeForm.reset(); // Reset the form
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been sent!");
            contactForm.reset(); // Reset the form
        });
    }
});


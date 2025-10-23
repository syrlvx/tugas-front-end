document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribeForm");
  const successMessage = document.getElementById("subscribeSuccess");
  const description = document.getElementById("subscribeDescription");
  const footer = document.getElementById("subscribeFooter");
  const modalElement = document.getElementById("subscribeModal");

  if (subscribeForm && successMessage) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Sembunyikan semua elemen awal
      subscribeForm.style.display = "none";
      description.style.display = "none";
      footer.style.display = "none";

      // Tampilkan pesan sukses
      successMessage.style.display = "block";

      // Reset form
      subscribeForm.reset();
    });

    // Saat modal ditutup, balikin semua elemen semula
    modalElement.addEventListener("hidden.bs.modal", function () {
      subscribeForm.style.display = "block";
      description.style.display = "block";
      footer.style.display = "flex"; // biar balik ke posisi center
      successMessage.style.display = "none";
    });
  }
});

// === Contact Form ===
const contactForm = document.querySelector("#contact form");
const contactThankYouModalElement = document.getElementById("contactThankYouModal");
let contactThankYouModal = null;

if (contactForm && contactThankYouModalElement) {
  contactThankYouModal = new bootstrap.Modal(contactThankYouModalElement);

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    contactThankYouModal.show(); // munculin modal
    contactForm.reset(); // kosongin form lagi
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (currentPage === linkPage) {
      link.classList.add("active");
    }
  });
});

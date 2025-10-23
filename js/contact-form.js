// contact-form.js

// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your real public key)
(function () {
  emailjs.init("s1H_r_-qrKw7HuENu");
})();

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    emailjs
      .send("service_h3rz9zg", "template_499kbc7", {
        name: form.name.value,
        email: form.email.value,
        company_name: form.company_name.value,
        phone: form.phone.value,
        service: form.service.value,
        message: form.message.value,
      })
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Oops, something went wrong. Please try again.");
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
      });
  });
});
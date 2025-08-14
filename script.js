// Store company name in one place
const companyName = "Kalindi Enterprise Pvt. Ltd.";

// Set company name everywhere with class 'company-name'
document.querySelectorAll(".company-name").forEach(el => {
  el.textContent = companyName;
});

// Contact form submission (basic)
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent to " + companyName + ".");
    $(this).trigger("reset");
  });
});

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (name === "" || phone === "") {
      alert("Please fill all required details");
    } else {
      let appointment = {
        patientName: name,
        phoneNumber: phone,
        date: new Date().toLocaleDateString(),
      };

      localStorage.setItem("appointment", JSON.stringify(appointment));

      const modal = new bootstrap.Modal(
        document.getElementById("confirmModal"),
      );

      modal.show();
      appointmentForm.reset();
    }
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Thank you for contacting Horizon Healthcare. We will get back to you soon.",
    );

    contactForm.reset();
  });
}

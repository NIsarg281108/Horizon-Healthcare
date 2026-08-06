const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const symptoms = document.getElementById("symptoms").value.trim();
    const emergency = document.getElementById("emergency").checked;
    const terms = document.getElementById("terms").checked;

    if (name === "" || phone === "" || email === "" || date === "") {
      alert("Please fill all required details");
      return;
    }

    if (!terms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    const appointment = {
      patientName: name,
      phoneNumber: phone,
      email: email,
      age: age,
      department: department,
      doctor: doctor,
      date: date,
      time: time,
      symptoms: symptoms,
      isEmergency: emergency,
    };

    localStorage.setItem("appointment", JSON.stringify(appointment));

    const modal = new bootstrap.Modal(document.getElementById("confirmModal"));

    modal.show();
    appointmentForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all required details");
      return;
    }

    const contact = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    localStorage.setItem("contact", JSON.stringify(contact));

    alert(
      "Thank you for contacting Horizon Healthcare. We will get back to you soon.",
    );

    contactForm.reset();
  });
}

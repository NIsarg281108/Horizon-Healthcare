const appointmentForm = document.querySelector(".appointment-form");
if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = appointmentForm.querySelector("input[type='text']").value;
    let phone = appointmentForm.querySelector("input[type='tel']").value;
    if (name === "" || phone === "") {
      alert("Please fill all required details");
    } else {
      let appointment = {
        patientName: name,
        phoneNumber: phone,
        date: new Date().toLocaleDateString(),
      };
      localStorage.setItem("appointment", JSON.stringify(appointment));
      alert("Appointment booked successfully!");
      appointmentForm.reset();
    }
  });
}
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Thank you for contacting Horizon Healthcare. We will get back to you soon.",
    );
    contactForm.reset();
  });
}
const healthForm = document.querySelector(".health-form");
if (healthForm) {
  healthForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Health details saved successfully!");

    healthForm.reset();
  });
} 
function showBooking() {
  window.location = "#booking-form";
}
function showPatientSearch() {
  document.getElementById("patient-search").style.display = "block";
  window.location = "#patient-search";
}
function showEmergency() {
  document.getElementById("emergency-info").style.display = "block";
  window.location = "#emergency-info";
}
function searchPatient() {
  let patientId = document.getElementById("patientId").value;
  let result = document.getElementById("patient-result");
  if (patientId === "") {
    result.innerHTML = "Please enter Patient ID";
  } else {
    result.innerHTML =
      "Patient record found. You can continue booking your appointment.";
  }
}

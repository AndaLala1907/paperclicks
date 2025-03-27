function nextStep(step) {
  if (step === 2) {
    let time = document.getElementById("timeSelect").value;
    if (!time) {
      alert("Please select a time!");
      return;
    }
  }
  if (step === 3) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (!firstName || !lastName || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    document.getElementById("summaryTime").textContent =
      document.getElementById("timeSelect").value;
    document.getElementById("summaryName").textContent =
      firstName + " " + lastName;
    document.getElementById("summaryEmail").textContent = email;
    document.getElementById("summaryPhone").textContent = phone;
  }

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step" + step).classList.remove("hidden");
}

function loadComponent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${url}:`, error));
}

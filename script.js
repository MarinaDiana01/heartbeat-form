let emailInput = document.querySelector(".email-input");
let userEmail = document.querySelector(".user-email");
let firstNameInput = document.querySelector(".first-name-input");
let userFirstName = document.querySelector(".user-first-name");
let lastNameInput = document.querySelector(".last-name-input");
let userLastName = document.querySelector(".user-last-name");
let locationInput = document.querySelector(".location-input");
let userLocation = document.querySelector(".user-location");
let iconLocation = document.querySelector(".user-icon-location");
let phoneInput = document.querySelector(".phone-input");
let userPhone = document.querySelector(".user-phone");
let iconPhone = document.querySelector(".user-icon-phone");
let descriptionInput = document.querySelector(".description-input");
let userBio = document.querySelector(".user-bio");
let emailErrorMessage = document.querySelector(".email-error-message");
let formInput = document.querySelectorAll(".form-input");
let userCard = document.querySelector(".user-card");
let buttonSave = document.querySelector(".button-save");

let displayUserCard = () => {
  let areAllInputsEmpty = false;

  for (let i = 0; i < formInput.length; i++) {
    if (formInput[i].value.trim().length > 0) {
      areAllInputsEmpty = true;
      break;
    }
  }

  if (areAllInputsEmpty) {
    userCard.style.display = "block";
    if (emailInput.value.length >= 5) {
      buttonSave.style.display = "block";
    } else {
      buttonSave.style.display = "none";
    }
  } else {
    userCard.style.display = "none";
  }
};

let updateUserEmail = () => {
  userEmail.innerText = emailInput.value;
  displayUserCard();

  if (emailInput.value.length < 5) {
    emailErrorMessage.style.display = "block";
    emailInput.style.border = "3px solid red";
  } else {
    emailErrorMessage.removeAttribute("style");
    emailInput.removeAttribute("style");
  }
};

let updateUserFirstName = () => {
  userFirstName.innerText = firstNameInput.value;
  displayUserCard();
};

let updateUserLastName = () => {
  userLastName.innerText = lastNameInput.value;
  displayUserCard();
};

let updateUserLocation = () => {
  iconLocation.style.display = "flex";
  userLocation.innerText = locationInput.value;
  displayUserCard();
};

let updateUserPhone = () => {
  iconPhone.style.display = "flex";
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
  userPhone.innerText = phoneInput.value;
  displayUserCard();
};

let updateUserBio = () => {
  userBio.innerText = descriptionInput.value;
  displayUserCard();
};

let saveForm = () => {
  formInput.forEach((inputs) => (inputs.disabled = true));
};

emailInput.addEventListener("input", updateUserEmail);
firstNameInput.addEventListener("input", updateUserFirstName);
lastNameInput.addEventListener("input", updateUserLastName);
locationInput.addEventListener("input", updateUserLocation);
phoneInput.addEventListener("input", updateUserPhone);
descriptionInput.addEventListener("input", updateUserBio);
buttonSave.addEventListener("click", saveForm);

const reservationButton = document.querySelector(".reservation__button");
const formInputs = document.querySelectorAll('.form__input');
const reservationModal = document.querySelector("#reservation-modal");
const reservationCloseBtn = reservationModal.querySelector(".modal__close-btn");
const reservationForm = reservationModal.querySelector(".modal__form");
const reservationNameInput = reservationModal.querySelector("#name-input");
const reservationCountInput = reservationModal.querySelector("#count-input");
const reservationDateInput = reservationModal.querySelector("#datetime-input");
const reservationEmailInput = reservationModal.querySelector("#email-input");

const confirmationModal = document.querySelector("#confirmation-modal");
const confirmationTextEl = confirmationModal.querySelector(".modal__text");
const confirmationCloseBtn =
  confirmationModal.querySelector(".modal__close-btn");

confirmationCloseBtn.addEventListener("click", function () {
  confirmationModal.classList.remove("modal_is-opened");
});

reservationButton.addEventListener("click", function () {
  reservationModal.classList.add("modal_is-opened");
});

reservationCloseBtn.addEventListener("click", function () {
  reservationModal.classList.remove("modal_is-opened");
});

reservationForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  confirmationModal.classList.add("modal_is-opened");
  reservationModal.classList.remove("modal_is-opened");
  
  const selectedSeating = reservationForm.querySelector('input[name="seatingPreference"]:checked');
  const wantsToSubscribe = reservationForm.querySelector('#subscribe-input');

  const inputValues = {
    name: reservationNameInput.value,
    count: reservationCountInput.value,
    date: reservationDateInput.value,
    email: reservationEmailInput.value,
  };

  confirmationTextEl.textContent = getConfirmationMessage(inputValues);
  evt.target.reset();
});

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${day} de ${month} a las ${time}`;
}

// No cambies nada por encima de esta línea

function getConfirmationMessage(values) {
  return `¡Hola, ${values.name.split(" ")[0]}! Tu reserva para ${values.count} se ha realizado para ${formatDateTime(values.date)}. Se ha enviado un correo electrónico de confirmación a ${values.email}.`;
}
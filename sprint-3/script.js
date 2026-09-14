document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el formulario a través de la clase, ya que no existe el id "heroForm"
  const form = document.querySelector(".form");
  const modal = document.querySelector(".modal"); // Asegúrate de que el modal exista en la página
  const closeModal = document.querySelector(".modal__button"); // Asegúrate de que exista el botón para cerrar el modal
  const checkbox = document.querySelector(".form__checkbox-input");
  const submitButton = document.querySelector(".form__button--submit");
  const inputs = document.querySelectorAll(
    ".form__input, .form__textarea, .form__select, .form__radio",
  );

  // Función para comprobar si todos los campos obligatorios se han rellenado
  function checkFormValidity() {
    let isValid = form.checkValidity(); // Comprueba la validez del formulario
    let isCheckboxChecked = checkbox.checked; // Comprueba si la casilla de verificación está marcada
    submitButton.disabled = !(isValid && isCheckboxChecked);
  }

  // Agrega un evento de entrada en cada campo para verificar la validez
  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  // Agrega un evento para la casilla de verificación
  checkbox.addEventListener("change", checkFormValidity);

  // Muestra el modal al enviar el formulario (si el modal existe)
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (modal) {
      modal.style.display = "flex";
    }
  });

  // Cierra el modal y reinicia el formulario (si existe el botón para cerrar el modal)
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      form.reset();
      submitButton.disabled = true; // Vuelve a deshabilitar el botón después de reiniciar
    });
  }
});

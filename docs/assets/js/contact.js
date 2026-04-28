document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Evita la recarga de la página

  const submitButton = this.querySelector("button[type='submit']");
  submitButton.disabled = true; // Deshabilita el botón
  submitButton.textContent = "Enviando..."; // Cambia el texto del botón

  const formData = new FormData(this);
  const responseMessage = document.getElementById("responseMessage");

  try {
    const response = await fetch("/utils/process_contact.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();
    responseMessage.textContent = result;
    responseMessage.classList.add("text-green-500");
    this.reset(); // Limpia el formulario tras enviar
  } catch (error) {
    responseMessage.textContent = "Hubo un error al enviar el mensaje. Inténtalo más tarde";
    responseMessage.classList.add("text-red-500");
  } finally {
    submitButton.disabled = false; // Habilita el botón nuevamente
    submitButton.textContent = "Enviar Mensaje"; // Restaura el texto original
  }
});
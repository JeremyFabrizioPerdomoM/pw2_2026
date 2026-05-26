document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formContacto");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje, pronto me pondré en contacto contigo.");
    form.reset();
  });
});

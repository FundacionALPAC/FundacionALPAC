// Obtener el modal
const modal = document.getElementById("myModal");

// Imagen dentro del modal
const modalImg = document.getElementById("img01");

// Botón cerrar
const btnCerrar = document.querySelector(".btn-cerrar");

// Todas las imágenes clickeables
const images = document.querySelectorAll(".img-encuentro");

// Abrir modal al hacer clic en una imagen
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Cerrar modal al hacer clic en el botón
btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

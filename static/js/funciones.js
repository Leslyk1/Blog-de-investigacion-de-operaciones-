document.addEventListener("DOMContentLoaded", function () {

    const botonMenu = document.getElementById("boton-menu");
    const menu = document.getElementById("menu");

    if (botonMenu && menu) {

        botonMenu.addEventListener("click", function () {
            menu.classList.toggle("mostrar");
        });

        const enlacesMenu = document.querySelectorAll(".menu a");

        enlacesMenu.forEach(function (enlace) {

            enlace.addEventListener("click", function () {
                menu.classList.remove("mostrar");
            });

        });

    }


    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

});
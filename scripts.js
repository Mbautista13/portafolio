/* scripts.js */

document.addEventListener("DOMContentLoaded", () => {

    /* TEXTO CAMBIANTE */

    const words = [
        "creativo",
        "responsable",
        "disciplinado"
    ];

    let index = 0;

    const changingWord =
    document.getElementById("changing-word");

    if(changingWord){

        changingWord.textContent = words[0];

        setInterval(() => {

            index++;

            if(index >= words.length){

                index = 0;
            }

            changingWord.textContent =
            words[index];

        }, 2000);
    }

    /* FORMULARIO */

    const formButton =
    document.querySelector(".open-form-btn");

    const form =
    document.getElementById("form-container");

    if(formButton && form){

        formButton.addEventListener("click", () => {

            form.classList.toggle("active");

        });
    }

    /* LOADER */

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.display = "none";

        }, 2000);
    }

});
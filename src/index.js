import "./styles.css"
import caretImg from "./images/caret.svg"

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = menu.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");
    const caretImage = document.createElement("img");
    caretImage.src = caretImg;
    caret.append(caretImage);

    select.addEventListener("click", () => {
        menu.classList.toggle("displayed");
        caretImage.classList.toggle("clicked");
    })

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            menu.classList.toggle("displayed");
            options.forEach(option => option.classList.remove("active"));
            option.classList.toggle("active");
            caretImage.classList.toggle("clicked");
        })
    })
})

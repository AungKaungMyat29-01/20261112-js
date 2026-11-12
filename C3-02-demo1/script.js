const btn = document.querySelector(".fade-button-js");
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "#05b";
    setTimeout(() => {
        btn.style.backgroundColor = "#07f";
    }, 500)
});
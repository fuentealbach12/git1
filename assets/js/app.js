let buttonToTop = document.getElementById("btnTop")

buttonToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        buttonToTop.classList.remove("d-none") // Aparece al bajar
    } else {
        buttonToTop.classList.add("d-none")    // Se oculta arriba
    }
})
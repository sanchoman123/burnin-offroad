let btn = document.getElementById("nav-btn");
let nav = document.getElementById("mobile-nav");



btn.addEventListener("click", d=> {
    if (nav.classList.contains("nav-open")) {
            nav.classList.remove("nav-open");
            nav.classList.add("nav-close");
    } else {

            nav.classList.remove("nav-close");
            nav.classList.add("nav-open");
    }
})

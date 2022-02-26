var _menu = document.querySelectorAll('.side-header .nav-bar ul li');
var _home = document.getElementById("home");
var _about = document.getElementById("about");
var _works = document.getElementById("works");

_menu[0].addEventListener("click", () => {
    _home.style.display = "flex";
    _about.style.display = "none";
    _works.style.display = "none";
});

_menu[1].addEventListener("click", () => {
    _home.style.display = "none";
    _about.style.display = "flex";
    _works.style.display = "none";
});

_menu[2].addEventListener("click", () => {
    _home.style.display = "none";
    _about.style.display = "none";
    _works.style.display = "flex";
});



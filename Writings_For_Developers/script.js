function toggleNavbar() {
    var navbar = document.getElementById("navbar_right");
    if (navbar.style.visibility === "visible") {
        navbar.style.visibility = "hidden";
    } else {
        navbar.style.visibility = "visible";
    }
}
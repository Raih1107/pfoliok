function toggleMenu() {
    const menu = documen.querySelector(".menu-links");
    const icon = documen.querySelector(".hamburger-icon");
menu.classlist.toggle("open");
icon.classlist.toggle("open");
}
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
sections.forEach(sect =>{
    let top = window.screenY;
    let offset = sec.offset - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute;

    if (top >= offset && top <offset + height ){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active')

        })
    }
})
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx=x');
    navbar.classList.toggle('active');
}
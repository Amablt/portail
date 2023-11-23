let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

 window.onscroll = () => {
     menu.classList.remove('fa-times')
     navbar.classList.remove('active')
 }

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
})
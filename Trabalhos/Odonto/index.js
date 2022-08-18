const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', RolagemAoClick);
})

function RolagemAoClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 50,
        behavior: "smooth",
    });
}
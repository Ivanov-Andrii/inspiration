const nav = document.querySelector('.nav');
const navMenuText = [...document.querySelectorAll('.nav-menu__text')]
document.querySelector('.arrow').onclick = function() {
    this.classList.toggle('active');
    nav.classList.toggle('wide');
    for (let i = 0, ln = navMenuText.length; i < ln; i++) {
        navMenuText[i].classList.toggle('width-zero')
    }
}
const main_btn = document.querySelector('.btn--white');
main_btn.addEventListener('click', (e) => {
    window.scrollTo({top: 2470, behavior: 'smooth'});
});

const logo = document.querySelector('.header__logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
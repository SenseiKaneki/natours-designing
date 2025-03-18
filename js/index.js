const main_btn = document.querySelector('.btn--white');
main_btn.addEventListener('click', () => {
    alert('Just a demo!')
});

const logo = document.querySelector('.header__logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.Toggle');
    var menu = document.querySelector('.Menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
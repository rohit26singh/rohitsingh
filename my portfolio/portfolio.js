/*==========================toggle icon navbar=====================*/
Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');


menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==========================scroll section active link=====================*/
Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    Let top = window.scrollY;
    Let offset = sec.offsetTop - 150;
    Let height = sec.offsetHeight;
    Let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });

     };

 });
/*==========================sticky navbar=====================*/
Let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*======remove toggle icon and navbar when click navbar link====*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*==========================scroll reveal=====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

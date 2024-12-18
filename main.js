/*============= toggle icon navbar ==========*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')
}

/*============= scroll action active link ==========*/

let section=document.querySelector('section');
let navLinks=document.querySelector('header nav a');

window.onscroll=()=>{
    SpeechRecognitionResult.forEach(sec=>{
        let top =window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

     if(top>= offset && top < offset+height){
        navLinks.forEach.apply(links=>{
            links.classList.remove('active')
     document.querySelector('header nav a [href*='+id+']').classList.add('active');
        
        });
     } ;  
    });
    /*============= Sticky navbar ==========*/
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

/*============= remove toggle icon and navbar ==========*/
 
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*============= scroll reveal ==========*/

ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay:200,

});

ScrollReveal().reveal('.home-contant, heading', { origin:'top' });

ScrollReveal().reveal('.home-img, .projects-Container,.portfolio-box, .contact form', { origin:'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });

/*============= type js==========*/

const typed= new Typed('.multiple-txt',{
    strings:['Software Engineer'],
    typeSpeed:70,
    backspeed:70,
    backDelay:1000,
    loop:true,
})

// scroll related 
const navbar = document.querySelector('.navbar');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 30){
        navbar.classList.add('header_scrolled');
    }
    else{
        navbar.classList.remove('header_scrolled');

    }
}

// collapse 

const navbarNav = document.querySelector('.collapse.navbar-collapse');

const navLink = document.querySelectorAll('.nav-link ');

navLink.forEach(function(link){
    link.addEventListener('click' , function(){
        navbarNav.classList.remove('show');
    })
})




'use strict';

//navbar
var navbar = document.querySelector('[data-navbar]');
var navToggler = document.querySelector('[data-nav-toggler]');

navToggler.addEventListener('click', function(){
    navbar.classList.toggle('active');
    navToggler.classList.toggle('active');
})

//header scroll
var header = document.querySelector('[data-header]');
window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
})

//add to favourite 
var toggleBtns = document.querySelectorAll('[data-toggle-btn]');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
})

var playBtn = document.querySelector('.play-btn');
var playarrow = document.querySelector(".play-arrow");
var video = document.querySelector('.intro-video');
playBtn.addEventListener("click", function(){
    if(playBtn.classList.contains('active')){
               pausevideo();
    }
    else{
        playvideo();
    }
})

video.addEventListener("ended", function(){
    playvideo();
    if(playBtn.classList.contains('active')){
        pausevideo();
    }
})

function playvideo(){

    video.play();
    playBtn.classList.add('active');
}
function pausevideo(){
    video.pause();
    playBtn.classList.remove('active');
}
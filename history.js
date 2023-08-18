let currentSlide = 1;
const IMAGE_WIDTH = 270;

function nextBtn(idx){
    let slide = 0;
    let slideLength = 0;
    if(idx == 1){
    slide = document.querySelector('.fr');
    slideLength = document.querySelectorAll('.fr li').length;
    }else if(idx == 2){
    slide = document.querySelector('.sws');
    slideLength = document.querySelectorAll('.sws li').length;
    }else{
    slide = document.querySelector('.itl');
    slideLength = document.querySelectorAll('.itl li').length;
    }
    if(currentSlide >= (slideLength - 2)){
    console.log("currentSlide : " + currentSlide);
    console.log("slideLength : " + slideLength);
    currentSlide = 0;
    }
    slide.style.transform = `translateX(-${IMAGE_WIDTH * currentSlide}px)`;
    currentSlide++;
}

function prevBtn(idx){
    let slide = 0;
    let slideLength = 0;
    if(idx == 1){
    slide = document.querySelector('.fr');
    slideLength = document.querySelectorAll('.fr li').length;
    }else if(idx == 2){
    slide = document.querySelector('.sws');
    slideLength = document.querySelectorAll('.sws li').length;
    }else{
    slide = document.querySelector('.itl');
    slideLength = document.querySelectorAll('.itl li').length;
    }
    if(currentSlide === 1){
    currentSlide = 1;
    }else{
    currentSlide--;
    }
    slide.style.transform = `translateX(-${IMAGE_WIDTH * (currentSlide - 1)}px)`;
}
import { Notify } from "notiflix";

const refs = {
    start:document.querySelector('.js-start'),
    stop:document.querySelector('.js-stop'),
    box:document.querySelector('.box'),
}


let isActive = null;

// //

refs.start.addEventListener('click',startToChangeColor );
refs.stop.addEventListener('click',stopToChangeColor);

// //

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

// //

function startToChangeColor(){
    if(isActive){
        Notify.failure('Switch active')
        return
    }

   intervalId =  setInterval(() => {
        isActive = true;
        refs.box.style.backgroundColor = getRandomHexColor();
    }, 1000);
} 

function stopToChangeColor(){
    if(isActive){
        clearInterval(intervalId);
        isActive = null;
        Notify.success('The switch has been stopped')
    }
}





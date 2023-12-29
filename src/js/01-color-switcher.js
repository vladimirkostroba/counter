const refs = {
    start:document.querySelector('.js-start'),
    stop:document.querySelector('.js-stop'),
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
        console.log('no');
        return
    }

   intervalId =  setInterval(() => {
        isActive = true;
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
} 

function stopToChangeColor(){
    if(isActive){
        clearInterval(intervalId);
        isActive = null;
    }
}





import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input:document.querySelector('#datetime-picker'),
    start:document.querySelector('#start'),
    days:document.querySelector('[data-days]'),
    hours:document.querySelector('[data-hours]'),
    minutes:document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}

const message = 'Please choose a date in the future';

// //

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if(selectedDates[0].getTime() < Date.now()){
        Notify.info(message)
        refs.start.disabled = true;
        return
    }
    refs.start.disabled = false;
    },

  };

  flatpickr('#datetime-picker',options)

  // //

  refs.start.addEventListener('click', function (e) {
    const selectedDates = new Date(refs.input.value).getTime();


    setInterval(() => {
      const dateNow = Date.now()

      const timeLeft = selectedDates - dateNow;

      markapHandler(timeLeft)
    }, 1000);

  });

  // //

  function markapHandler(deltaTime){
        refs.days.textContent = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        refs.hours.textContent = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        refs.minutes.textContent = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        refs.seconds.textContent = Math.floor((deltaTime % (1000 * 60)) / 1000);
}








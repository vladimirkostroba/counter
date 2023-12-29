import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input:document.querySelector('#datetime-picker'),
    start:document.querySelector('#start'),
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if(selectedDates[0].getTime() < Date.now()){
        alert('no')
        refs.start.disabled = true;
        return
    }
    refs.start.disabled = false;
    },

  };

  flatpickr('#datetime-picker',options)

  refs.start.addEventListener('click', function (e) {
    const selectedDates = new Date(refs.input.value);

    console.log(selectedDates);
  });




// const date = new Date()

// console.log(date.getTime());




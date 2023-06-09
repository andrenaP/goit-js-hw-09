import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const button_start = document.querySelector('[data-start]');
button_start.disabled=true;
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log("I AM HERE");
    if (selectedDates[0]<= Date.now()){
    button_start.disabled=true;
    Notiflix.Notify.failure('Please choose a date in the future');
    }
    else{
    button_start.disabled=false;
    }
    
  },
};
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const date = document.querySelector('#datetime-picker');
button_start.addEventListener('click', on_button_start_click);
flatpickr(date, options);



  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


  function on_button_start_click()
  {
    date.disabled=true;
    timerId = setInterval(() => {
      const choosenDate = new Date(date.value);
      const timeToFinish = choosenDate - Date.now();
      const { days, hours, minutes, seconds } = convertMs(timeToFinish);
      day.textContent = addLeadingZero(days);
      hour.textContent = addLeadingZero(hours);
      min.textContent = addLeadingZero(minutes);
      sec.textContent =addLeadingZero(seconds);
      if (timeToFinish < 1000){
      clearInterval(timerId);
      date.disabled=true;
      button_start.disabled=true;
      Notiflix.Notify.success('Success');
      }


    }, 1000);
  }
  
  function addLeadingZero(value){
    return `${value}`.padStart(2, '0');

  }
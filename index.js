document.querySelector('.js-start-button').addEventListener('click', () => {
  
  counting();
});

/*
document.querySelector('.js-stop-button').addEventListener('click', () => {
  console.log('stop timer');
});
*/

document.querySelector('.js-reset-button').addEventListener('click', () => {
  clearInterval(intervalId);
  hour = 0;
  minute = 0;
  second = 0;
  document.querySelector('.js-time').innerHTML = `00:00:00`;
  let changeId = document.querySelector('.js-start-button');
  if (changeId.innerHTML === 'Pause') {
    document.querySelector('.js-start-button').innerHTML = 'Start';
    counting();
  }
});


let intervalId;
let countdown = false;
let hour = 0;
let minute = 0;
let second = 0;

function counting() {
  if (!countdown) {
    intervalId = setInterval(() => {
      second++;
      second = pad(second);
      minute = pad(minute);
      hour = pad(hour);
      document.querySelector('.js-time').innerHTML = `${hour}:${minute}:${second}`;
      
      if (second >= 59) {
        second = -1;
        minute++;
        if (minute > 59) {
          minute = 0;
          hour++;
        }
      }
    }, 1000);
    
    countdown = true;
    document.querySelector('.js-start-button').innerHTML = 'Pause';
  } else{
    clearInterval(intervalId);
    countdown = false;
    document.querySelector('.js-start-button').innerHTML = 'Start';
  }
 
  function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }
  
};

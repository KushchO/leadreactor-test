'use srtict';

(function () {
  /*Задаем время таймера в виде строк из двух цифр например '12' или '05'*/
  var TIMER = {
    HOURS: '00',
    MINUTES: '15',
    SECONDS: '00'
  };

  console.log(+TIMER.HOURS);


  var end = false;

  window.onload = function(){
    var hours = document.querySelector('.timer__hours');
    var minutes = document.querySelector('.timer__minutes');
    var seconds = document.querySelector('.timer__seconds');
    var hour;
    var minute;
    var second;

    var initializeTimer = function () {
       hour = hours.innerHTML = TIMER.HOURS;
       minute = minutes.innerHTML = TIMER.MINUTES;
       second = seconds.innerHTML = TIMER.SECONDS;
    }

    var refreshTimer = function () {
      hours.innerHTML = hour;
        minutes.innerHTML = minute;
        seconds.innerHTML = second;
        if (hour < 10) {
          hours.innerHTML = '0' + +hour;
        }
        if (minute < 10) {
          minutes.innerHTML = '0' + +minute;
        }
        if (second < 10 ) {
          seconds.innerHTML = '0' + +second;
        }
    }

    var timer = function (){
      if( second > 0 ) second--;
      else{
        second = 59;

        if( minute > 0 ) minute--;
        else{
          minute = 59;

          if( hour > 0 ) hour--;
          else end = true;
        }
      }
      if(end){
        clearInterval(intervalID);
        alert("Таймер сработал!");
      }else{
        refreshTimer();
      }
    }

    initializeTimer();
    window.intervalID = setInterval(timer, 1000);
  }

})();

'use srtict';

(function () {
  /*Задаем время таймера*/
  var TIMER = {
    HOURS: '00',
    MINUTES: 15,
    SECONDS: '00'
  };


  var end = false;

  window.onload = function(){
    var hour = document.querySelector('.timer__hours');
    var minute = document.querySelector('.timer__minutes');
    var second = document.querySelector('.timer__seconds');
    hour.innerHTML = TIMER.HOURS;
    minute.innerHTML = TIMER.MINUTES;
    second.innerHTML = TIMER.SECONDS;

    hour = +document.querySelector('.timer__hours').innerHTML;
    minute = +document.querySelector('.timer__minutes').innerHTML;
    second = +document.querySelector('.timer__seconds').innerHTML;

    if (hour < 10 && hour > 0) {
      document.querySelector('.timer__hours').innerHTML = '0' + hour;
    }
    if (minute < 10 && minute > 0) {
      document.querySelector('.timer__minutes').innerHTML = '0' + minute;
    }
    if (second < 10 && second > 0) {
      document.querySelector('.timer__seconds').innerHTML = '0' + second;
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
        document.querySelector('.timer__hours').innerHTML = hour;
        document.querySelector('.timer__minutes').innerHTML = minute;
        document.querySelector('.timer__seconds').innerHTML = second;
        if (hour < 10) {
          document.querySelector('.timer__hours').innerHTML = '0' + hour;
        }
        if (minute < 10) {
          document.querySelector('.timer__minutes').innerHTML = '0' + minute;
        }
        if (second < 10 ) {
          document.querySelector('.timer__seconds').innerHTML = '0' + second;
        }

      }
    }
    window.intervalID = setInterval(timer, 1000);
  }

})();

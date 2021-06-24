window.onload = function () {
// ロードなどされたら出てくる機能//
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonLap = document.getElementById('button-lap');
  console.log(buttonLap);
  var lapList = document.getElementById('lapList');
  var Interval ;
  //ボタン・数字の設定//

  buttonStart.onclick = function() { //when button is clicked function//
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10); //10ミリ秒ごとに上がる// //1000にすると１秒ごとに上がる//
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
  
  function startTimer () {   
    tens++; //加算してる ++//

    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    } // if lower than 9 will go to 0//
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      //if higher than 9 add by tens//
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  buttonLap.onclick = function() { 
    console.log(seconds,tens);
    lapList.innerHTML = lapList.innerHTML + "<li>"+ appendSeconds.innerHTML + ":" + appendTens.innerHTML + "</li>";
    
   
  }

}


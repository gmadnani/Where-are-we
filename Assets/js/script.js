$(document).ready(function() {

function getSelectValue (){
var selectedValue = document.getElementById("selectMe").value;
console.log (selectedValue);
return getSelectValue ()
}

let input =$("Input");
let durationofGame =$("durationofGame");

/*Duration of time*/
let =input = selectedValue * 15 
let = durationofGame = moment().format('H:mm:ss').show;
console.log (seconds)

})
// convert seconds to minutes
/* OPTION1
function timeConvert(){
 let num = document.getElementById('selectedValue').value;
var hours = Math.floor(num/60);
var minutes = num % 60;
var seconds = sec % 600
document.getElementById("result").innerHTML = 
hours + ";" +minutes + "<br>" + "(" +hours + "Hours & " + minutes + "Minutes &" + seconds + "Seconds)";
}*/

/*
OPTION 2
var toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10)
  var hours   = Math.floor(sec_num / 3600)
  var minutes = Math.floor(sec_num / 60) % 60
  var seconds = sec_num % 60

  return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
}*/


/* OPTION 3 stackoverflow suggestion by TJ Crowder
let totalSeconds = 28565;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);

// If you want strings with leading zeroes:
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
console.log(hours + ":" + minutes + ":" + seconds);   */     



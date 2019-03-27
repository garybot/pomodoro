var mins = 25;  //Set the number of minutes you need
var secs = mins * 60;
var timerRunning = false;
let countdown;
function Decrement() {
  var currentMinutes = Math.floor(secs / 60);
  var currentSeconds = secs % 60;
  if(currentSeconds <= 9) {
  	currentSeconds = "0" + currentSeconds;
  }
  secs--;
  document.getElementById("time").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
  if(secs <= 0) {
  	clearInterval(countdown);
  }
}
function toggleTimer(minutes) {
	secs = minutes * 60;
	if (!timerRunning) {
		timerRunning = true;
		countdown = setInterval('Decrement()', 1000);
	} else {
		timerRunning = false;
		secs = 0;
	}
}


$(document).ready(function() {
	let $tomato = $(document.getElementById("tomato"));
	$tomato.click(function() {
		toggleTimer(25);
	});
});
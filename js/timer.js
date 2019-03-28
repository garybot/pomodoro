const timer = {
	seconds: 1500,
	isRunning: false,
	countdown: undefined,
	
	update: function() {
	  document.getElementById("time").innerHTML = this.currentMins + ":" + this.currentSecs; //Set the element id you need the time put into.
	},

	decrement: function() {
		this.currentSecs = this.seconds % 60;
		console.log(this.currentSecs);
		this.currentMins = Math.floor(this.seconds / 60);
		if (this.currentSecs <= 9) {
		this.currentSecs = "0" + this.currentSecs;
		}
		this.update();
		this.seconds--;
		if(this.seconds < 0) {
			clearInterval(this.countdown);
		}
	},

	toggle: function(mins) {
		this.seconds = mins * 60;
		this.countdown = setInterval(this.decrement.bind(timer), 1000);
	}
}

$(document).ready(function(){
	let $tomato = $(document.getElementById("tomato"));
	$tomato.click(function() {
		timer.toggle(25);
	});
});
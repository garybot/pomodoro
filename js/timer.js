const timer = {
	seconds: 1500,
	isRunning: false,
	countdown: undefined,
	
	update() {
	  $("#time").html(this.currentMins + ":" + this.currentSecs); //Set the element id you need the time put into.
	},

	decrement() {
		this.currentSecs = this.seconds % 60;
		this.currentMins = Math.floor(this.seconds / 60);
		if (this.currentSecs <= 9) {
			this.currentSecs = "0" + this.currentSecs;
		}
		this.update();
		this.seconds--;
		if(this.seconds < 0) {
			clearInterval(this.countdown);
			setTimeout("You Just Completed A Pomodoro!");
		}
	},

	toggle(mins) {
		if (!this.isRunning) {
			this.seconds = mins * 60;
			this.countdown = setInterval(this.decrement.bind(timer), 1000);
			this.isRunning = true;
		} else {
			clearInterval(this.countdown);
			this.isRunning = false;
		}
	}
};

$(document).ready(function(){
	let $tomato = $("#tomato");
	$tomato.click(function() {
		let duration = $("#duration").val();
		timer.toggle(duration);
	});
});
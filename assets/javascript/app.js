$(document).ready(function() {

var intervalId;

var timer = {

	number: 4,
	running: false,

	timer: function() {

		if (this.number === 0) {
				$("#display").html("<h2>Time's Up!</h2>");
	}
		
		else {
			this.number--
		$("#display").html("<h2>" + this.number + "</h2>");
		}
	},

	reset: function() {

		clearInterval(intervalId);
		this.running = false;
		this.number = 5;
		$("#display").html("<h2>" + this.number + "</h2>");


	}

};

	$("#start").on("click", function() {
		$("#display").html("<h2>" + timer.number + "</h2>");
		running = true;
		intervalId = setInterval(function() {
			timer.timer()
		}, 1000);
	
});


	$("#pause").on("click", function() {

		running = false;
		clearInterval(intervalId);

	});


	$("#reset").on("click", function() {

		timer.reset();

	});

});
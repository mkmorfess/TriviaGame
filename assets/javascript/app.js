$(document).ready(function() {

var intervalId;

var timer = {

	number: 5,
	running: false,

	timer: function() {

		if (this.number === 0) {
				$("#display").html("<h2>Time's Up!</h2>");
				clearInterval(intervalId);
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


	},


	question: function() {

		$()

	}

};

	$("#start").on("click", function() {

		$("#display").html("<h2>" + timer.number + "</h2>");
		timer.running = true;
		intervalId = setInterval(function() {
			timer.timer()
		}, 1000);
	
		if (timer.number === 0) {
			timer.number = 5;
			$("#display").html("<h2>" + timer.number + "</h2>");
			timer.timer();
		}

		else if (timer.number != 0) {

		}
});


	$("#pause").on("click", function() {

		timer.running = false;
		clearInterval(intervalId);

	});


	$("#reset").on("click", function() {

		timer.reset();

	});

});
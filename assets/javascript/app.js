$(document).ready(function() {

var intervalId;

var timer = {

	number: 5,
	running: false,
	question: ["How many inches in a foot?", "What are you doing?"],

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
		$("#display").html("<h2></h2>");


	},


	// question: function(question) {

	// 	var randNum = Math.floor(Math.random() * 2)

	// 	$('#question').append("<h2>" + this.question + "</h2>")

	// }

};

	$("#start").on("click", function() {

		$("#display").html("<h2>" + timer.number + "</h2>");
		timer.running = true;
		intervalId = setInterval(function() {
			timer.timer()
		}, 1000);

		// timer.question(randNum);
	
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
$(document).ready(function() {

var intervalId;

var timer = {

	number: 5,
	running: false,
	score: 0,
	questions: { 
		question1: ["How many inches in a foot?"],
		answer1: [12, 10, 9, 4],
		question2: ["Guess my favorite color!"],
		answer2: ["Blue", "Green", "Purple", "Orange"],

		},

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
		this.score = 0;
		$("#display").html("<h2></h2>");
		$("#score").html(" ")
		$("#question").html(" ")


	},

	question: function() {

		var choices = "<p class='text-center'>1." + timer.questions.question1[0] + "</p>" +
									"<ul class='text-center'>" +
										"<input type='radio' name='q1' value='a' class='q1a'><label for='q1a'>" + timer.questions.answer1[0] + "</label><br/>" +
										"<input type='radio' name='q1' value='b' class='q1b'><label for='q1b'>" + timer.questions.answer1[1] + "</label><br/>" +
										"<input type='radio' name='q1' value='c' class='q1c'><label for='q1c'>" + timer.questions.answer1[2] + "</label><br/>" +
										"<input type='radio' name='q1' value='d' class='q1d'><label for='q1d'>" + timer.questions.answer1[3] + "</label><br/>" +
									"</ul>"


		$("#question").append(choices)

		$(".q1a").on("click", function() {
			timer.score++

			if (timer.number != 0) {
			$("#score").html("Guessed Correctly: " + timer.score)
			$("#question").html(choices)
			}
		})

	}

};

	$("#start").on("click", function() {

		$("#display").html("<h2>" + timer.number + "</h2>");
		timer.running = true;
		intervalId = setInterval(function() {
			timer.timer()
		}, 1000);
			timer.question();
	
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
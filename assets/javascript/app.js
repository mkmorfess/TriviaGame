$(document).ready(function() {

var intervalId;

var timer = {

	number: 5,
	running: false,
	score: 0,
	questions: { 
		question1: ["How many inches in a foot?", "Guess my favorite color!", "Testing2"],
		answer1: [[12, 10, 9, 4], ["Blue", "Green", "Purple", "Orange"], ["ans1", "ans2", "ans3", "ans4"]]

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


	for (var i = 0; i < 3; i++){


				var choices = "<p class='text-center'>" + timer.questions.question1[i] + "</p>" +
									"<ul class='text-center'>" +
										"<input type='radio' name='q1' value='a' class='q1a'><label for='q1a'>" + timer.questions.answer1[i][0] + "</label><br/>" +
										"<input type='radio' name='q1' value='b' class='q1b'><label for='q1b'>" + timer.questions.answer1[i][1] + "</label><br/>" +
										"<input type='radio' name='q1' value='c' class='q1c'><label for='q1c'>" + timer.questions.answer1[i][2] + "</label><br/>" +
										"<input type='radio' name='q1' value='d' class='q1d'><label for='q1d'>" + timer.questions.answer1[i][3] + "</label><br/>" +
									"</ul>"

				//**current bug, I was having issues with my for loop creating a .html and then stopping in the loop until i "click" the answer, then continueing the loop
				//**so i switched it to .append(choices) so that itll at least show all the questions! For now, the current answer is ALWAYS the first choice...
				$("#question").append(choices)

				//**current bug, it only allows for q1a to be the answer and you can only choose 1 answer at a time and itll delete the old one.**
			}
		//create an array of questions and answers to allow to be input into the variable which therefore would be put into the for loop below.	
									
		console.log(timer.questions.answer1[0][0])

		$(".q1a").on("click", function() {
//**current bug, when you pause and restart the game.. it adds an additional point**
			if (timer.number != 0 && timer.running === true) {
				timer.score++
			$("#score").html("Guessed Correctly: " + timer.score)

			

			//when you click on the correct answer q1a, then grab a new question with new answers from array. Repeat this until number equals 0. This would require a for loop and
			//either a .append() or .html() to include new question with answers 
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
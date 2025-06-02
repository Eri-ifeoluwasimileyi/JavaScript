const prompt = require("prompt-sync")();

function getAnswer(number1, number2) {

	let answer = number1 - number2
	
	return answer

}


let count = 0
let attempt = 0
let score = 0 

while(attempt < 10) {

	number1 = Math.floor(Math.random() * 10000)

	number2 = Math.floor(Math.random() * number1)
	
	while(count < 2) {

		let userInput = Number(prompt("What is: " + number1 + " - " + number2))

		let answer = getAnswer(number1, number2)

		if(answer == userInput) {
			console.log("correct")
			score++;
			break;
		}
		else{
			console.log("wrong answer")
		}

		count++;

	}
	
	attempt++;

}

console.log("your score is " + score)
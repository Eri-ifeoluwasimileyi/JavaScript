const prompt = require("prompt-sync")();

function checkMonth(month) {

	let days = 0

	if(month == 2) days = 28;

	else 

	if(month == 4 || month == 6) return 30;

	if(month == 9 || month == 11) return 30;

	else return 31;

}


function checkDays(lastPeriodDay, periodMonth, daysToAdd) {

	while(daysToAdd > 0) {

		let daysInAMonth = checkMonth(periodMonth);

		if(lastPeriodDay + daysToAdd <= daysInAMonth) {
				
			lastPeriodDay = lastPeriodDay + daysToAdd;

			return {lastPeriodDay, periodMonth};
	
		}else {
		
			daysToAdd -= (daysInAMonth - lastPeriodDay + 1);
			
			lastPeriodDay = 1;
		
			periodMonth++;
					
			if(periodMonth > 12) periodMonth = 1;	
	
		}
	}

	return {lastPeriodDay, periodMonth};
	
}


function twoNumbers(number) {

	if(number < 10) return "0" + number;

	else return "" + number;


}


function dateformat(day, month){

	return twoNumbers(day) + " - " + twoNumbers(month);

}







console.log(`

	====================
	Menstrual Calculator
	====================
			my pride!!
		
			`);	
		

let lastPeriod = Number(prompt("Enter first day of your last period (1-31): "));
console.log();
	
let periodMonth = Number(prompt("Enter the month (1-12): "));
console.log();
	
let periodDays = Number(prompt("How long does your periods last on average: "));
console.log();

let cycleLength = Number(prompt("What is your average cycle length (days): "));
console.log();
	

let ovulationDay = Math.floor(cycleLength / 2);

let fertileWindow = ovulationDay - 5;

let fertileWindowEnd = ovulationDay + 1;
	
let nextPeriod = cycleLength + 1;

let rangeOfNextPeriod = nextPeriod + periodDays;


let ovulationDate = checkDays(lastPeriod, periodMonth, ovulationDay);

let fertileStart = checkDays(lastPeriod, periodMonth, fertileWindow);
	
let fertileEnd = checkDays(lastPeriod, periodMonth, fertileWindowEnd);

let nextPeriodStart = checkDays(lastPeriod, periodMonth, nextPeriod);
	
let nextPeriodEnd = checkDays(lastPeriod, periodMonth, rangeOfNextPeriod);



console.log("Calculating, please wait......");
console.log();
console.log();
	
console.log("Your estimated ovulation date is: " + dateformat(ovulationDate.lastPeriodDay, ovulationDate.periodMonth));
console.log();

console.log("Fertile window starts: " + dateformat(fertileStart.lastPeriodDay, fertileEnd.periodMonth));
console.log();

console.log("Your next period is estimated to be between: " + dateformat(nextPeriodStart.lastPeriodDay, nextPeriodStart.periodMonth) + " and " + dateformat(nextPeriodEnd.lastPeriodDay, nextPeriodEnd.periodMonth));	
console.log();





const prompt = require("prompt-sync")();

function checkName(name){

	if(!name) return false;
	
	if(name.startsWith(" ") || name.endsWith(" ")) return false;
	
	if(name.length < 2 || name.length > 30) return false;
	return true;


}

function checkAmount(amount){

	if(isNaN(Number(amount))) return false;
	else
	if(amount < 1) return false;
	else return true;

}


function checkHours(hours){

	if(isNaN(Number(hours))) return false;
	else
	if(hours < 1 || hours > 40) return false;
	else return true;

}


function checkRate(rate){

	if(isNaN(Number(rate))) return false;
	else
	if(rate < 1) return false;
	else return true;

}


function checkFederal(federal){

	if(isNaN(Number(federal))) return false;
	else
	if(federal < 1 || federal > 100) return false;
	else return true;

}


function checkState(state){

	if(isNaN(Number(state))) return false;
	else
	if(state < 1 || state > 100) return false;
	else return true;

}


function createPayroll(employees, name, hours, rate, federal, state){
	
	hours = Number(hours);

	rate = Number(rate);

	federal = Number(federal);

	state = Number(state);


	employees[name] = {
	
	'Employee name': name,

	'Hours worked': 0,

	'Pay rate': 0,
	
	'Gross pay': 0,

	'Deduction':' ',

	'\tFederal withholding': 0,

	'\tState withholding': 0,

	'\tTotal Deduction': 0,

	'Net pay': 0
	
	}


	employees[name]['Hours worked'] = hours;


	employees[name]['Pay rate'] = `$${rate.toFixed(2)}`


	let gross = (rate * hours);

	employees[name]['Gross pay'] = `$${gross.toFixed(2)}`


	let fed_tax = (gross * federal / 100);

	employees[name]['\tFederal withholding'] = `$${fed_tax.toFixed(2)}`
	

	let state_tax = (gross * state / 100);

	employees[name]['\tState withholding'] = `$${state_tax.toFixed(2)}`


	let total = (fed_tax + state_tax);

	employees[name]['\tTotal Deduction'] = `$${total.toFixed(2)}`


	let net_pay = (gross - total);

	employees[name]['Net pay'] = `$${net_pay.toFixed(2)}`

	return true;

}



function viewPayroll(employees){
		
	for(const [key, value] of Object.entries(employees)){

		console.log(`Employee Name: ${key}`);

		console.log(`Hours Worked: ${value['Hours Worked']}`);

		console.log(`Pay Rate: ${value['Pay Rate']}`);

		console.log(`Gross Pay: ${value['Gross Pay']}`);
		
		console.log(`Federal Withholding: ${value['Deductions']['Federal Withholding']}`);

		console.log(`State Withholding: ${value['Deductions']['State Withholding']}`);

		console.log(`Total Deduction: ${value['Deductions']['Total Deduction']}`);

		console.log(`Net Pay: ${value['Net Pay']}`);

	
	}
}


function updatePayroll(employees, name){

	if(!(name in employees)) return false

		delete employees[name];
		return true;
}





const employees = {}

while (true) {

	console.log(`
	
	M CHI Payroll System

	1. Add employee payroll

	2. View all payrolls

	3. Update employee payroll

	4. Exit

		`)

	let choice = prompt("Enter your choice from(1-4): ")
	
	if(choice == '1') {
	
		while (true) {
		
			let name = prompt("Enter employee name: ")
			
			if(!checkName(name)){
			
				console.log("invalid name");
				continue;
			}
	
			let hours = prompt("Enter hours worked: ")
			
			if(!checkHours(hours)){
			
				console.log("Invalid hours");
				continue;
			}

			let rate = prompt("Enter pay rate: ");

			if(!checkRate(rate)){
				console.log("Invalid rate");
				continue;			
			}
 
			let federal = prompt("Enter federal withholding %: ");
	
			if(!checkFederal(federal)){

                		console.log("Invalid input");
                		continue;
			}

			let state = prompt("Enter state withholding %: ")

			if(!checkState(state)) {
				console.log("invalid input");
				continue;
			}

			createPayroll(employees, name, hours, rate, federal, state);

			console.log("Employee payroll added");
			break;
		}

	}else if(choice == '2'){

		viewPayroll(employees);

	}else if(choice == '3'){

			let update = prompt("Enter employee name to update: ")

			if(!updatePayroll(employees, update)) {

				console.log("Employee not found.");

				continue;

			}

			console.log("Old payroll removed. Please re-enter details.");

			while (true) {
		
				let name = prompt("Enter employee name: ")
			
				if(!checkName(name)){
			
					console.log("invalid name");
					continue;
				}
	
				let hours = prompt("Enter hours worked: ")
			
				if(!checkHours(hours)){
			
					console.log("Invalid hours");
					continue;
				}

				let rate = prompt("Enter pay rate: ");

				if(!checkRate(rate)){
					console.log("Invalid rate");
					continue;			
				}
 
				let federal = prompt("Enter federal withholding %: ");
	
				if(!checkFederal(federal)){

                			console.log("Invalid input");
                			continue;
				}

				let state = prompt("Enter state withholding %: ")
	
				if(!checkState(state)) {
					console.log("invalid input");
					continue;
				}

				createPayroll(employees, name, hours, rate, federal, state);

				console.log("Employee payroll added");
				break;
				
			}


		}else if(choice == '4'){

			console.log("Exiting M CHI payroll system.");
			break;

		}else{
		
			console.log("Invalid choice. Please select a valid option.")

		}



}
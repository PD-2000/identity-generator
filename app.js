const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Jeremy', 'Saul', 'Thomas', 'Michael', 'Jason', 'Samuel'];
const femaleNames = ['Amanda', 'Skye', 'Jessica', 'Autumn', 'Sidney', 'Cindy', 'Meg'];
const lastNames = ['Doe', 'Miles', 'Smith', 'Parker', 'Jackson', 'Fairfield', 'Park'];
const emailDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com'];
const people = [];

function randChoice(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhoneNumber(){
	const area = Math.floor(Math.random() * 900) + 100;
	const num1 = Math.floor(Math.random() * 900) + 100;
	const num2 = Math.floor(Math.random() * 9000) + 1000;
	return `(${area}) ${num1}-${num2}`;
}

for(let i = 0; i < 20; i++){
	const identity = {};

	const identityGender = randChoice(genders);
	identity.gender = identityGender;

	if(identityGender === 'M')
		identity.firstName = randChoice(maleNames);
	else
		identity.firstName = randChoice(femaleNames);

	identity.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	identity.age = Math.floor(Math.random() * 60) + 18;

	identity.phoneNumber = generatePhoneNumber();
	identity.email = `${identity.firstName.toLowerCase()}.${identity.lastName.toLowerCase()}@${randChoice(emailDomains)}`;

	people.push(identity);
}

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
	if(err){
		console.error(err);
		return;
	}

	console.log('Data successfully saved to people.json.');
});
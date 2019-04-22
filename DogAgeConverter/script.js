const button = document.querySelector('#button');
const input = document.querySelector('#input');
const age = document.querySelector('#age');
let years = document.querySelector('#years');

button.onclick = e => {
	e.preventDefault();

	const inputValue = input.value;
	let dogAge;

	if (inputValue <= 1) {
		dogAge = inputValue*15;
	} else if(inputValue <= 2) {
		dogAge = 15 + (inputValue - 1) * 9;
	} else {
		dogAge = 15 + 9 + (inputValue - 2) * 5;
	}

	age.innerHTML = dogAge;
};
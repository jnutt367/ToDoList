const form = document.querySelector('form');
const input = document.querySelector('input');

const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputValue = input.value;
	input.value = '';
	const li = document.createElement('li');
	li.textContent = inputValue;
	
	const label = document.createElement('label');
	label.textContent = 'Done';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label); //at this point the checkbox 
	                       //with the label of comfirmed is added to the DOM.
	const button = document.createElement('button');
	button.textContent = 'remove';
	li.appendChild(button);
	
	ul.appendChild(li);//this places the li on the page with the added checkbox and remove button
	});
	// this code adds a created <li> inside the form element and places it into our to do list!!
	
	ul.addEventListener('click', (e) => {
		if(e.target.tagName === 'BUTTON') {
			const li = e.target.parentNode;
			const ul = li.parentNode;
			ul.removeChild(li);
		}
	});
	

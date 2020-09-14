const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputValue = input.value;
	input.value = '';
	const li = document.createElement('li');
	li.textContent = inputValue;
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);
	const button = document.createElement('button');
	button.textContent = 'remove';
	li.appendChild(button);
	ul.appendChild(li);
});

ul.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON') {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});
// I think I got dis down Whooo Hooo!!!
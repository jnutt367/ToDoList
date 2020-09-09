const form = document.getElementById('toDoList');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';
	const ul = document.getElementById('listItems');
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
});
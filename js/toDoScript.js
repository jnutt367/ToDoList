

const form = document.querySelector('form');
const input = form.querySelector('input');


const ul = document.querySelector('ul');    
// initially I declared this variable
// inside the event handler
// I moved it in order that it 
// could be accessed globally.




form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = "";
//giving input.value an empty string will clear the input from the 
//document's input field but keep it on the page as a list item.
	
	const li = document.createElement('li');
	li.textContent = text;
	const label = document.createElement('label');
	label.textContent = 'confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	
	//adding a remove button
	/* the 3 lines below were copied from the 3 lines before the label was 
	appended to the li */
	const button = document.createElement('button');
	button.textContent = 'remove';
	li.appendChild(button);
	/* the 3 lines above were copied from the 3 lines before the label was 
	appended to the li */
	
	
	
	ul.appendChild(li);
});
//so far this only adds a list item with a 'confirmed checkbox'

ul.addEventListener('change', (e) => { 
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;
	
	if(checked) {
		listItem.className = 'responded'; 
	} else {
		listItem.className = '';
	}
});
//so far this adds styles to the checkbox when checked by adding a className to the to the list Item

ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});









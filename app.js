//                    Steps to follow     //
//First things first, Capture the input
const form = document.getElementById('todoList');
const input = form.querySelector('input');
//the top two lines create variables that capture the form by it's ID 
//and the input field by it's Tag Name
const ul = document.getElementById('listItems');
//then we call the form variable that we've just created and
//and attach an event listener and listen for a submit event
//when the browser hears the submit event it logs the value of
//input to the console, but only for a brief second

//calling preventDefault on the event object, or (e),
//prevents the browser from sending the input to the url 
//and keeps us on the current page that we are on...
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputValue = input.value;
  input.value = '';
  
  const li = document.createElement('li');
  li.textContent = inputValue;
  
  
  
  //creates configures and appends the checkbox
  //to the parent element label
  const label = document.createElement('label');
  label.textContent = 'completed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  //Now append the label to the list element
  li.appendChild(label);
  // add a remove button to the list items
  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  
  
  ul.appendChild(li);
});
//<li> elements are children of <ul> elements so we will 
// need our handler to create an <li> to hold the task.
//...then we will append that element to the <ul>.

// At this point this app will capture the input and
//create a new list item

ul.addEventListener('change', (e) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;
	
	if (checked){
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});


// add a click event handler to the remove button
// but ignore the elements that ere not buttons
ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON'){
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});


//                    Steps to follow     //
//First things first, Capture the input
const form = document.getElementById('todoList');
const input = form.querySelector('input');
//the top two lines create variables that capture the form by it's ID 
//and the input field by it's Tag Name

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
  const ul = document.getElementById('listItems');
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
});
//<li> elements are children of <ul> elements so we will 
// need our handler to create an <li> to hold the task.
//...then we will append that element to the <ul>.

// At this point this app will capture the input and
//create a new list item


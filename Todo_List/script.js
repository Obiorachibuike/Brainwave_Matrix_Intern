// Select necessary DOM elements
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  
  // Check if input is not empty
  if (taskText !== '') {
    const newTask = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    // Append the span and delete button to the list item
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    
    // Append the new task to the todo list
    todoList.appendChild(newTask);
    
    // Clear the input field after adding
    todoInput.value = '';
    
    // Add event listener for delete button
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(newTask);
    });
  }
}

// Add event listener for the add button
addButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
todoInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

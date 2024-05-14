const todoForm = document.getElementById('todoForm');
const newTodo = document.getElementById('newTodo');
const todoList = document.getElementById('todoList');

let todos = [];

function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(todo);
  renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
  
    todos.forEach((todo) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const deleteButton = document.createElement('span');
  
      span.textContent = todo.text;
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
  
      li.appendChild(span);
      li.appendChild(deleteButton);
  
      if (todo.completed) {
        li.classList.add('completed');
      }
  
      li.dataset.id = todo.id; // Set the data-id attribute here
  
      todoList.appendChild(li);
    });
  
    saveTodos();
  }

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const savedTodos = localStorage.getItem('todos');

  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });

  renderTodos();
}

function deleteTodo(id) {
    console.log('Deleting item with id:', id);
    todos = todos.filter((todo) => todo.id !== id);
    console.log('Updated todos array:', todos);
    renderTodos();
  }
  
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const id = Number(e.target.parentElement.dataset.id); // Access the dataset.id property here
      deleteTodo(id);
    }
  
    if (e.target.tagName === 'SPAN') {
      const id = Number(e.target.parentElement.dataset.id);
      toggleCompleted(id);
    }
  });

loadTodos();
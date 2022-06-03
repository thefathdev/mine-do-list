// Selectors
const addBtn = document.getElementById('todo-btn')
const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('todo-input')
const todoFilter = document.querySelector('.todo__filter')

// Event Listeners
addBtn.addEventListener('click', addList)
todoList.addEventListener('click', deleteItem)
todoFilter.addEventListener('click', filterTodo)

// Functions
function addList(event) {
  event.preventDefault()

  // Generate div
  const addDiv = document.createElement('div')
  addDiv.classList.add('todo__list-box')

  // Generate li
  const addLi = document.createElement('li')
  addLi.classList.add('todo__list-item')
  addLi.innerText = todoInput.value

  // Append li to div
  addDiv.appendChild(addLi)

  // Generate buttons
  const markBtn = document.createElement('button')
  markBtn.classList.add('todo__list-mark')
  markBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('todo__list-delete')
  deleteBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'

  // Append buttons to div
  addDiv.appendChild(markBtn)
  addDiv.appendChild(deleteBtn)

  // Append div to ul
  todoList.appendChild(addDiv)

  // Clear todo input value
  todoInput.value = ''
}

function deleteItem(event) {
  const item = event.target

  // Delete todo list
  if (item.classList[0] === 'todo__list-delete') {
    const todo = item.parentElement
    // Animate todo item
    todo.classList.add('fall')
    // Remove todo item
    todo.addEventListener('transitionend', () => todo.remove())
  }

  // Check mark todo list
  if (item.classList[0] === 'todo__list-mark') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes
  todos.forEach(function (todo) {
    const todoStyle = todo.style
    if (todoStyle != undefined && todoStyle != null) {
      switch (e.target.value) {
        case 'All':
          todoStyle.display = 'flex'
          break
        case 'Completed':
          if (todo.classList.contains('completed')) {
            todoStyle.display = 'flex'
          } else {
            todoStyle.display = 'none'
          }
          break
        case 'Uncompleted':
          if (todo.classList.contains('completed')) {
            todoStyle.display = 'none'
          } else {
            todoStyle.display = 'flex'
          }
          break
      }
    }
  })
}

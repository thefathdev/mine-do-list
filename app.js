// Selectors
const addBtn = document.getElementById('todo-btn')
const todoList = document.getElementById('todo-list')

// Event Listeners
addBtn.addEventListener('click', addList)

// Functions
function addList(event) {
  event.preventDefault()

  // Generate div
  const addDiv = document.createElement('div')
  addDiv.classList.add('todo__list-box')

  // Generate li
  const addLi = document.createElement('li')
  addLi.classList.add('todo__list-item')
  addLi.innerText = 'Hayyy mi nee'

  // Append li to div
  addDiv.appendChild(addLi)

  // Generate buttons
  const markBtn = document.createElement('button')
  markBtn.classList.add('todo__list-mark')
  markBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('todo__list-delete')
  deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'

  // Append buttons to div
  addDiv.appendChild(markBtn)
  addDiv.appendChild(deleteBtn)

  // Append div to ul
  todoList.appendChild(addDiv)
}

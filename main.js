// variables

const inputTask = document.querySelector('.js-inputTask');
const addTask = document.querySelector('.js-addTask');
const containerTasks = document.querySelector('.container-tasks');

// Add Task

addTask.addEventListener('click', function () {
  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  li.classList.add('titleTask');
  task.appendChild(li);

  let checkButton = document.createElement('button');
  checkButton.classList.add('check');
  checkButton.innerHTML = "<i class='bx bx-check' ></i>";
  task.appendChild(checkButton);

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('trash');
  deleteButton.innerHTML = "<i class='bx bxs-trash' ></i>";
  task.appendChild(deleteButton);

  if (inputTask.value === '') {
    alert('Please enter a task');
  } else {
    containerTasks.appendChild(task);
    inputTask.value = '';
  }

  checkButton.addEventListener('click', function () {
    checkButton.parentElement.style.textDecoration = 'line-through';
  });

  deleteButton.addEventListener('click', function () {
    deleteButton.parentElement.remove();
  });
});

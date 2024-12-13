let addBtn = document.querySelector('.add-btn');
let taskInput = document.querySelector('#task-list');
let ul = document.querySelector('.unordered-list');


function addTask(){
  let task = taskInput.value.trim();
  if(task === "") return;

  //Creating <li>
  const li = document.createElement('li');
  
  //Creating <div>
  const tasklistleft = document.createElement('div');
  tasklistleft.classList.add("task-list-left");

  const checkbox = document.createElement('input');
  
  const tasklistright = document.createElement('div');
  tasklistleft.classList.add("task-list-right");

  const deletebutton = document.createElement('button');
  deletebutton.classList.add('delete-btn');

  checkbox.type = 'checkbox';
  deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
  tasklistleft.appendChild(checkbox);
  tasklistleft.appendChild(document.createTextNode(task));

  tasklistright.appendChild(deletebutton);

  li.appendChild(tasklistleft);
  li.appendChild(tasklistright);

  ul.appendChild(li);

  taskInput.value = '';

  deletebutton.addEventListener('click', removeTask);
}

function removeTask(event){
  const taskItems =event.target.closest('li');
  taskItems.remove();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function event(){
  if(event.key === "Enter"){
    addTask();
  }
});

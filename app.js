loadEvents();
// unosi na strani
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}
// submit funkcija
function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// dodavanje zadatka na listu
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

// brisanje liste
function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

// brisanje ili obeležavanje zadatka
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// brisanje zadatka
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// obeležavanje zadatka
function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
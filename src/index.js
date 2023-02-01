document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target["new-task-description"].value);
    addToList(e.target["new-task-description"].value);

  })


  function addToList(todo){
    // add child to ul
    let ul  = document.getElementById("tasks");
    let li = document.createElement("li");
  
    // add text
    li.style.color = setPriority(li);
    li.textContent = todo + " ";

    // add checkbox
    let checkbox = document.createElement('input');
    checkbox.type ='checkbox';
    checkbox.style.verticalAlign = 'middle';

    li.append(checkbox);
    li.append(" ");

  
    // add button
    let deleteButton = document.createElement('submit');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', (e) => {
      li.remove();
    })

  
    li.append(deleteButton);
    ul.appendChild(li);
    document.getElementById('priority').selectedIndex = 0;

    // reset priority for new input
    document.getElementById('new-task-description').value = null;

  }

  //changes color of list items based on priority level
  function setPriority(li){
    let x = document.getElementById('priority').selectedIndex;
    let option = document.getElementsByTagName('option')[x].value;
    if (option === 'high') {
      li.style.color = '#990000'

    } else if (option === 'medium') {
      li.style.color = '#ffcc00'

    } else if (option === 'low') {
      li.style.color = '#339966'
    }

  }



})






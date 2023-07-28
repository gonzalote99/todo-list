import ToDoList from './toDoList.js';
import LocalStorage from './localStorage.js';
import UserInterface from './userInterface.js';
import CompleteToDoList from './CompleteToDoList.js';



document.querySelector('.fa-arrows-rotate')
.addEventListener('click', () => window.location.reload());



document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('.form-text');
  listContainer.innerHTML = `
  <p class="error-message">*error</p>
    <form class="form-text" action="">
    <input type="text" class="text" placeholder="add to list" required />
     <i class="fa-solid fa-arrow-right-to-bracket"></i>
    </form>
  `;

  UserInterface.showToDoLists();
  UserInterface.removeToDoLists();
  UserInterface.updateDesc();
  CompleteToDoList.compToDoList();
  CompleteToDoList.clearComp();

});


document.querySelector('.form-text').addEventListener('submit', (e) => {
  e.preventDefault();


  const inputText = document.querySelector('.text');
  const todolists = LocalStorage.getToDoLists();
  const desc = inputText.value;
  const index = todolists.length + 1;
  const comp = false;


  const newtodolists = new ToDoList(index, desc, comp);

  UserInterface.addToDoLists(newtodolists);

  LocalStorage.addToDoLists(newtodolists);

  UserInterface.clearFields();
  window.location.reload();

})





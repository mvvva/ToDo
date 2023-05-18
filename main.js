import { toDoList } from "./src/js/templates";
import * as toast from "./src/js/toaster";

const input = document.querySelector("#input");
const createBtn = document.querySelector("#create");
const todosWrapper = document.querySelector("#todos-wrapper");

let taskToEdit = null;

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/Saidumarxon";

// EVENTS
createBtn.addEventListener("click", createToDo);
window.addEventListener("load", fetchTodos);
todosWrapper.addEventListener("click", deleteTask);

// FUNCTIONS
// -> post
async function createToDo() {
  const value = input.value.trim();
  const select =  document.querySelector('#pstn').value;
  const colorBg = document.querySelector('#color').value;

  if (!value) return;

  const res = await fetch(`${api}.json`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      task: value,
      position: select,
      name: 'Saidumarxon',
      color: colorBg,
    }),
  });
  const data = await res.json();
  input.value = "";
  fetchTodos();
}

// -> get
async function fetchTodos() {
  const res = await fetch(`${api}.json`);
  const data = await res.json();
  todosWrapper.innerHTML = "";
  for (let key in data) {
    todosWrapper.innerHTML += toDoList(data[key], key);
  }
}

// delete
async function deleteTask(e) {
  const target = e.target;
  const listElement = target.parentElement.parentElement;
  if (!target.classList.contains("delete")) return;
  const res = await fetch(`${api}/${listElement.id}.json`, {
    method: "DELETE",
  });
  fetchTodos();
  toast.success("Task was deleted!");
}
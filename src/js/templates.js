export function toDoList(todo, id) {
  return `
  <li
  style="background: ${todo.color};"
  id="${id}"
  done="${todo.done}"
  class="shadow-xl border border-gray p-2 rounded-md mt-2 flex justify-between items-center">

  <p class="${todo.done && "text-green-500"}">
    <span class="todo-text">${todo.task} / ${todo.position} / Hired by ${todo.name}</span>
  </p>

    <div class="actions">
      <button
        class="delete bg-red-500 py-2 px-4 rounded-md text-white text-xs"
      >
        <i class="fas fa-trash pointer-events-none"></i>
      </button>
    </div>
  </li>
  `;
}
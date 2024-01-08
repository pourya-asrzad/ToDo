import { times } from "./static/timeData.js"
import { todoData } from "./todoData.js"

const todoListContainer = document.getElementById("todo-list-container")



//render times 
times.forEach((time) => {
    todoListContainer.innerHTML += `<div class="flex items-center gap-1">
    <span>${time}</span>
    <div class="hr"></div>
    </div> `
})


function renderTodo(todoItems) {
    const topBase = 68;
    todoData.forEach((todo) => {
        todoListContainer.innerHTML += `<div class="todo-card" style="top:${todo.startTime.position * topBase - 68}px;">
      <span>${todo.title}</span>
      <p>${todo.description.substring(0, 20)}...</p>
  </div>`
    })


}
renderTodo(todoData)

{/* <div class="todo-card">
    <span>hello</span>
    <p>dsgdfgfdgdfh</p>
</div> */}

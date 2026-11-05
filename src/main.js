import "./style.css" 
import { add_task, done_count, tasks_count, task_list, change_state } from "./task_manager"

// title
const title = document.createElement("h1")
title.textContent = "I miei task"
document.body.appendChild(title)

// add task
const text_field = document.createElement("textarea")
document.body.appendChild(text_field)
const add_button = document.createElement("button")
add_button.textContent = "Aggiungi task"
document.body.appendChild(add_button)

// task list
const list_element = document.createElement("ul")
document.body.appendChild(list_element)

// counter
const count = document.createElement("p")
document.body.appendChild(count)

// functions
function update_counter() {
  count.textContent = `Totali: ${tasks_count()} · Completati: ${done_count()}`
}

function update_list() {
  list_element.replaceChildren(
    ...task_list().map(t => {
      const li = document.createElement("li")

      const checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      checkbox.checked = t.done  

      const label = document.createElement("label")
      label.append(t.content, " ", checkbox)  

      checkbox.addEventListener("change", () => {
        change_state(t.id, checkbox.checked)  
        update_counter()
      })

      li.appendChild(label)
      return li
    })
  )
}

function refresh() {
  update_list()
  update_counter()
}

// events
add_button.addEventListener("click", () => {
  const value = text_field.value.trim()
  if (value === "") return
  add_task(value)
  text_field.value = ""
  refresh()
})

// render
refresh()
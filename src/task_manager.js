
let tasks = []

export function tasks_count() {
  return tasks.length
}

export function done_count() {
  return tasks.filter(t => t.done).length
}

export function add_task(content) {
  if (!content) return
  tasks.push({id: tasks.length, content: content, done: false})
}

export function change_state(id, checked) {
  const task = tasks.find(t => t.id === id)
  if (task) task.done = checked
}

export function task_list() {
  return tasks.map(t => ({ id: t.id, content: t.content, done: t.done }))
}
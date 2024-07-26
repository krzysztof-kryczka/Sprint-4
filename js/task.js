const tasks = []

const addTask = (e) => {
    e.preventDefault()

    const task = document.querySelector('#taskInputName')

    if (task.value.trim() === '') {
        return alert('Nazwa zadania nie może być pusta.')
    }

    tasks.push(task.value.trim())
    console.log(tasks)
    task.value = ''
    displayTasks()
}

const displayTasks = () => {
    const taskList = document.querySelector('#taskList')
    console.log(taskList)
    taskList.innerHTML = ''

    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement('li')
        listItem.textContent = tasks[i]
        taskList.appendChild(listItem)
    }
}

const addTaskBtn = document.querySelector('#taskAddButton')
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', addTask)

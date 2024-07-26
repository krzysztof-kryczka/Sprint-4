const tasks = []

const addTask = (e) => {
    e.preventDefault()

    const task = document.querySelector('#taskInputName')

    if (task.value.trim() === '') {
        return alert('Nazwa zadania nie może być pusta.')
    }

    if (tasks.includes(task.value.trim())) {
        return alert('To zadanie już istnieje na liście.')
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

        const taskEditButton = document.createElement('button')
        taskEditButton.textContent = 'Edytuj'

        const taskDeleteButton = document.createElement('button')
        taskDeleteButton.textContent = 'Usuń'

        taskList.appendChild(listItem)
        listItem.appendChild(taskEditButton)
        listItem.appendChild(taskDeleteButton)
    }
}

const addTaskBtn = document.querySelector('#taskAddButton')
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', addTask)

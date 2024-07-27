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

editTask = (i) => {
    const task = tasks[i]
    const listItem = document.createElement('li')
    const editInput = document.createElement('input')
    editInput.value = task
    const confirmButton = document.createElement('button')
    confirmButton.textContent = 'Zatwierdź zmiany'
    confirmButton.addEventListener('click', () => {
        if (editInput.value.trim() === '') {
            return alert('Nazwa zadania nie może być pusta.')
        }
        tasks[i] = editInput.value
        displayTasks()
    })

    const taskDeleteButton = document.createElement('button')
    taskDeleteButton.textContent = 'Usuń'
    taskDeleteButton.addEventListener('click', () => {
        tasks.splice(i, 1)
        displayTasks()
    })

    listItem.appendChild(editInput)
    listItem.appendChild(confirmButton)
    listItem.appendChild(taskDeleteButton)

    const taskList = document.querySelector('#taskList')
    const existingListItem = taskList.querySelector(
        'li:nth-child(' + (i + 1) + ')'
    )
    if (existingListItem) {
        taskList.replaceChild(listItem, existingListItem)
    }
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
        taskEditButton.addEventListener('click', () => editTask(i))
        const taskDeleteButton = document.createElement('button')
        taskDeleteButton.textContent = 'Usuń'
        taskDeleteButton.addEventListener('click', () => {
            tasks.splice(i, 1)
            displayTasks()
        })

        taskList.appendChild(listItem)
        listItem.appendChild(taskEditButton)
        listItem.appendChild(taskDeleteButton)
    }
}

const addTaskBtn = document.querySelector('#taskAddButton')
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', addTask)

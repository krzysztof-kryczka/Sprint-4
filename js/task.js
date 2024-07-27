const tasks = []

const validateTask = (task) => {
    return task.trim() !== ''
}

const addTask = (e) => {
    e.preventDefault()
    const task = document.querySelector('#taskInputName')
    if (!validateTask(task.value)) {
        return alert('Nazwa zadania nie może być pusta.')
    }
    if (tasks.includes(task.value.trim())) {
        return alert('To zadanie już istnieje na liście.')
    }
    tasks.push(task.value.trim())
    task.value = ''
    displayTasks()
}

editTask = (i) => {
    const task = tasks[i]
    const listItem = document.createElement('li')
    const editInput = document.createElement('input')
    editInput.value = task

    const confirmButton = createButton('Zatwierdź zmiany', () => {
        if (!validateTask(editInput.value)) {
            return alert('Nazwa zadania nie może być pusta.')
        }
        tasks[i] = editInput.value
        displayTasks()
    })

    const taskDeleteButton = createButton('Usuń', () => {
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

const createButton = (text, clickHandler) => {
    const button = document.createElement('button')
    button.textContent = text
    button.addEventListener('click', clickHandler)
    return button
}

const createListItem = (taskName, editHandler, deleteHandler) => {
    const listItem = document.createElement('li')
    listItem.textContent = taskName
    const taskEditButton = createButton('Edytuj', editHandler)
    const taskDeleteButton = createButton('Usuń', deleteHandler)
    listItem.appendChild(taskEditButton)
    listItem.appendChild(taskDeleteButton)
    return listItem
}

const displayTasks = () => {
    const taskList = document.querySelector('#taskList')
    taskList.innerHTML = ''
    for (let i = 0; i < tasks.length; i++) {
        const listItem = createListItem(
            tasks[i],
            () => {
                editTask(i)
            },
            () => {
                tasks.splice(i, 1)
                displayTasks()
            }
        )
        taskList.appendChild(listItem)
    }
}

const addTaskBtn = document.querySelector('#taskAddButton')
addTaskBtn.addEventListener('click', addTask)

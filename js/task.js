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

const editOrDeleteTask = (i, isEdit) => {
    const task = tasks[i]
    const taskList = document.querySelector('#taskList')
    const existingListItem = taskList.querySelector(
        'li:nth-child(' + (i + 1) + ')'
    )

    if (isEdit) {
        const editInput = document.createElement('input')
        editInput.value = task

        const confirmButton = createButton('Zatwierdź zmiany', () => {
            if (!validateTask(editInput.value)) {
                return alert('Nazwa zadania nie może być pusta.')
            }
            if (tasks.includes(editInput.value.trim())) {
                return alert('To zadanie już istnieje na liście.')
            }
            tasks[i] = editInput.value
            displayTasks()
        })
        const deleteButton = createButton('Usuń', () => {
            editOrDeleteTask(i, false)
        })
        existingListItem.innerHTML = ''
        existingListItem.appendChild(editInput)
        existingListItem.appendChild(confirmButton)
        existingListItem.appendChild(deleteButton)
    } else {
        tasks.splice(i, 1)
        displayTasks()
    }
}

const createButton = (text, clickHandler) => {
    const button = document.createElement('button')
    button.textContent = text
    button.addEventListener('click', clickHandler)
    return button
}

const createListItem = (taskName, i) => {
    const listItem = document.createElement('li')
    listItem.textContent = taskName
    const taskEditButton = createButton('Edytuj', () => {
        editOrDeleteTask(i, true)
    })
    const taskDeleteButton = createButton('Usuń', () => {
        editOrDeleteTask(i, false)
    })
    listItem.appendChild(taskEditButton)
    listItem.appendChild(taskDeleteButton)
    return listItem
}

const displayTasks = () => {
    const taskList = document.querySelector('#taskList')
    taskList.innerHTML = ''
    for (let i = 0; i < tasks.length; i++) {
        const listItem = createListItem(tasks[i], i)
        taskList.appendChild(listItem)
    }
}

const addTaskBtn = document.querySelector('#taskAddButton')
addTaskBtn.addEventListener('click', addTask)

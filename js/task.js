const tasks = []

const addTask = () => {
    const task = document.querySelector('#taskInputName')

    if (task.value.trim() === '') {
        return alert('Nazwa zadania nie może być pusta.')
    }

}

const addTaskBtn = document.querySelector('#taskAddButton')
console.log(addTaskBtn)
addTaskBtn.addEventListener('click', addTask)

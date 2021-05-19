// Containers & Sections
const main = document.getElementById('main');

// Header Attributes
const todoInput = document.getElementById('todo-input');
const addItemBtn = document.getElementById('todo-add');
const clearListBtn = document.getElementById('todo-clear');

// List Parent Element
const listParent = document.getElementById('todo-items');

addItemBtn.addEventListener('click', () => { // + Button
    inputFilter();
});

clearListBtn.addEventListener('click', () => {
    clearAllItems();
});

// "todoInput" Input Value Filter
function inputFilter() {

    if (todoInput.value.length === 0 || todoInput.value.length > 50) { // If Empty or Too Long Input
        invalidInput();
        inputClear();
    } else if (todoInput.value.length > 0) { // If Valid Input
        validInput();
    } else { // If Error
        unexpectedInput();
        inputClear();
    }

}

// Invalid todoInput
function invalidInput() {

    todoInput.placeholder = "Invalid Input!";
    todoInput.style.backgroundColor = "#af000026"; // Red
    
    setTimeout(() => {
        todoInput.placeholder = "Add to your todo list";
        todoInput.style.backgroundColor = "transparent";
    }, 2000);

}

// Valid todoInput
function validInput() {
    extendedForm();
}

// Extended Form (Upon Valid todoInput Value)
function extendedForm() {

    const background = document.createElement('div'); // Background
    background.id = 'extended-form-background';
    main.prepend(background);

        const container = document.createElement('div'); // Container
        container.className = 'container-xxl';
        container.id = 'extended-form-container';
        background.appendChild(container);

            const parent = document.createElement('div'); // Form Parent
            parent.className = 'extended-form-parent';
            container.appendChild(parent);

                const newForm = document.createElement('form'); // Form
                newForm.className = 'extended-form-content';
                parent.appendChild(newForm);

                    const arrowSVG = document.createElement('object'); // Object (arrow.svg)
                    arrowSVG.data = '/assets/svg/arrow.svg';
                    newForm.appendChild(arrowSVG);

                    const itemNameLabel = document.createElement('label'); // Task Label
                    itemNameLabel.textContent = 'Task:';
                    itemNameLabel.htmlFor = 'todo-item-name';
                    itemNameLabel.id = 'name-label';
                    newForm.appendChild(itemNameLabel);

                        const itemName = document.createElement('input'); // Task Name Input
                        itemName.type = 'text';
                        itemName.autocomplete = 'off';
                        itemName.id = 'todo-item-name';
                        newForm.appendChild(itemName);

                        // Task Pre-Filled Input
                        itemName.value = todoInput.value;
    
                    const deadlineSVG = document.createElement('object'); // Object (deadline.svg)
                    deadlineSVG.data = "assets/svg/deadline.svg";
                    newForm.appendChild(deadlineSVG);
        
                    const itemDeadlineLabel = document.createElement('label'); // Deadline Label
                    itemDeadlineLabel.textContent = 'Deadline:';
                    itemDeadlineLabel.htmlFor = 'todo-item-deadline';
                    itemDeadlineLabel.id = 'deadline-label';
                    newForm.appendChild(itemDeadlineLabel);

                        const itemDeadline = document.createElement('input'); // Deadline Input
                        itemDeadline.type = 'date';
                        itemDeadline.id = 'todo-item-deadline';
                        newForm.appendChild(itemDeadline);

                    const itemTimeOfDay = document.createElement('input');
                    itemTimeOfDay.type = 'time';
                    itemTimeOfDay.id = 'todo-item-time';
                    newForm.appendChild(itemTimeOfDay);

            const buttonsDiv = document.createElement('div'); // Buttons Container
            buttonsDiv.className = 'buttons-container';
            parent.appendChild(buttonsDiv);

                const exitButton = document.createElement('button'); // Exit Form Button
                exitButton.textContent = 'Go Back';
                exitButton.type = 'button';
                exitButton.id = 'exit-extended-form';
                buttonsDiv.appendChild(exitButton);

                const completeForm = document.createElement('button'); // Complete Form Button
                completeForm.textContent = 'Create';
                completeForm.type = 'button';
                completeForm.id = 'complete-extended-form';
                buttonsDiv.appendChild(completeForm);

    exitButton.addEventListener('click', () => {
        deleteElements(); // Deletes (Exits) Extended Form
    });

    completeForm.addEventListener('click', () => {
        checkFormValues(); // Checks Form Values
    });

}

// Deletion of Extended Form Elements (Extended Form)
function deleteElements() {

    const background = document.getElementById('extended-form-background');
    
    if (background.hasChildNodes) { // If background has child elements
        background.removeChild(background.firstChild);
        main.removeChild(background);
    } else { // Unexpected Error
        console.error('Unexpected Error while deleting children of background.')
    }

}

// Checks Values of Input (Extended Form) 
function checkFormValues() {

    const itemName = document.getElementById('todo-item-name');
    const itemDeadline = document.getElementById('todo-item-deadline');
    const timeOfDay = document.getElementById('todo-item-time');

    if (itemName.value.length === 0 || itemName.value.length > 25) { // If Empty or Too Long Input
        invalidTaskName();
    } 

    if (!itemDeadline.value) { // If Empty
        invalidDeadline();
    }

    if (!timeOfDay.value) { // If Empty
        invalidTime();
    }

    if (itemName.value.length > 0 && itemDeadline.value.length > 0 && timeOfDay.value.length > 0) {
        createListItem();
    }
}

// Invalid Task Name (Extended Form)
function invalidTaskName() {
    invalidFormInput(itemName);
}

// Invalid Deadline [input type="date"] (Extended Form)
function invalidDeadline() {
    const itemDeadline = document.getElementById('todo-item-deadline');
    invalidFormInput(itemDeadline);
}

// Invalid Time [input type="time"] (Extended Form)
function invalidTime() {
    const timeOfDay = document.getElementById('todo-item-time');
    invalidFormInput(timeOfDay);
}

// Successfully Creates a New List Item
function createListItem() {

    const itemName = document.getElementById('todo-item-name');
    const itemDeadline = document.getElementById('todo-item-deadline');
    const timeOfDay = document.getElementById('todo-item-time');

    const newItem = document.createElement('li');
    newItem.className = 'list-item';
    listParent.appendChild(newItem);

        const flexItem1 = document.createElement('div');
        flexItem1.className = 'flex-item';
        newItem.appendChild(flexItem1);

            const arrowSVG = document.createElement('object');
            arrowSVG.className = 'arrow-right-circle';
            arrowSVG.data = '/assets/svg/arrow.svg';
            flexItem1.appendChild(arrowSVG);

            const name = document.createElement('p');
            name.textContent = itemName.value;
            name.className = 'task';
            flexItem1.appendChild(name);

        const flexItem2 = document.createElement('div');
        flexItem2.className = 'flex-item';
        newItem.appendChild(flexItem2);

            const deadlineSVG = document.createElement('object');
            deadlineSVG.data = '/assets/svg/deadline.svg';
            flexItem2.appendChild(deadlineSVG);

            const date = document.createElement('p');
            date.className = 'deadline';
            flexItem2.appendChild(date);  

        const flexItem3 = document.createElement('div');
        flexItem3.className = 'flex-item';
        newItem.appendChild(flexItem3);

            const timeLeftSVG = document.createElement('object');
            timeLeftSVG.data = '/assets/svg/timeLeft.svg';
            flexItem3.appendChild(timeLeftSVG);

            const time = document.createElement('p');
            time.className = 'time-left';
            time.textContent = timeOfDay.value;
            flexItem3.appendChild(time);

        const flexItem4 = document.createElement('div');
        flexItem4.className = 'flex-item';
        newItem.appendChild(flexItem4);

            const completeButton = document.createElement('button');
            completeButton.className = 'complete-button';
            completeButton.setAttribute("onclick", "complete(this);");
            flexItem4.appendChild(completeButton);

                const completeSVG = document.createElement('object');
                completeSVG.data = '/assets/svg/completeButton.svg';
                completeButton.appendChild(completeSVG);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.setAttribute("onclick", "remove(this);");
            flexItem4.appendChild(deleteButton);

                const deleteSVG = document.createElement('object');
                deleteSVG.data = '/assets/svg/deleteButton.svg';
                deleteButton.appendChild(deleteSVG);

    // Converts Date Input to "DayOfWeek + Date(13th, 14th etc.) + Month"
    const day = new Date(itemDeadline.value) + '';
    const dayArr = day.split(" ");
    let newDeadline = "";
    const monthAndDate = `${dayArr[2]} ${dayArr[1]}`;
    if (dayArr[0] === "Thu") {
        newDeadline = `Thursday`.concat(` `, monthAndDate);
    } else if (dayArr[0] === "Sat") {
        newDeadline = `Saturday`.concat(` `, monthAndDate);
    } else if (dayArr[0] === "Wed") {
        newDeadline = `Wednesday`.concat(` `, monthAndDate);
    } else if (dayArr[0] === "Tue") {
        newDeadline = `Tuesday`.concat(` `, monthAndDate);
    } else {
        newDeadline = `${dayArr[0]}day ${dayArr[2]} ${dayArr[1]}`;
    }

    dateValue(newDeadline);

    // Updates the list item date to newDeadline value
    function dateValue(value) {
        date.textContent = value;
    }

    deleteElements();
    inputClear();
}

// Unexpected / Error todoInput
function unexpectedInput() {
    console.error("Unexpected Error with todoInput.value");
    console.error(`todoInput.value had the value of --> "${todoInput.value}"`)
}

// Clears todoInput (QoL)
function inputClear() {
    todoInput.value = "";
}

// Remove All Items
function clearAllItems() {
    while (listParent.firstChild) {
        listParent.removeChild(listParent.lastChild)
    }
}

// Invalid Input Function
function invalidFormInput(field) {

    field.style.backgroundColor = "#af000026";

    setTimeout(() => {
    
        field.style.backgroundColor = "transparent";

    }, 2000);

}

// Mark Task as Completed
function complete(task) {
    const taskName = task.parentNode.parentNode;
    taskName.classList.toggle('toggle-completion');
}

// Delete List Item
function remove(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}
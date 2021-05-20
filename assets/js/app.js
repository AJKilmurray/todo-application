// Containers & Sections
const main = document.getElementById('main');

// Header Attributes
const todoInput = document.getElementById('todo-input');
const addItemBtn = document.getElementById('todo-add');
const clearListBtn = document.getElementById('todo-clear');

// List Parent Element
const listParent = document.getElementById('todo-items');

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        inputFilter();
    }
});

addItemBtn.addEventListener('click', () => { // + Button
    inputFilter();
});

clearListBtn.addEventListener('click', () => { // Remove All Items Button
    clearConfirmation();
});

// "todoInput" Input Value Filter
function inputFilter() {

    if (todoInput.value.length === 0) { // If Empty or Too Long Input
        invalidInput();
    } else if (todoInput.value.length > 25) {
        invalidInput();
    } else if (todoInput.value.length > 0 || todoInput.value.length <= 25) { // If Valid Input
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

                    const formFlexItem1 = document.createElement('div'); // Flex Item 1
                    formFlexItem1.className = 'form-flex-item';
                    newForm.appendChild(formFlexItem1);

                        const arrowSVG = document.createElement('img'); // Image/Icon (arrow.svg)
                        arrowSVG.className = 'form-svg';
                        arrowSVG.style.width = '36px';
                        arrowSVG.style.height = '36px';
                        arrowSVG.src = 'assets/svg/arrow.svg';
                        formFlexItem1.appendChild(arrowSVG);

                        const itemNameLabel = document.createElement('label'); // Task Label
                        itemNameLabel.textContent = 'Task:';
                        itemNameLabel.htmlFor = 'todo-item-name';
                        itemNameLabel.id = 'name-label';
                        formFlexItem1.appendChild(itemNameLabel);

                            const itemName = document.createElement('input'); // Task Name Input
                            itemName.type = 'text';
                            itemName.autocomplete = 'off';
                            itemName.id = 'todo-item-name';
                            formFlexItem1.appendChild(itemName);

                        // Task Pre-Filled Input
                        itemName.value = todoInput.value;
    

                    const formFlexItem2 = document.createElement('div'); // Flex Item 2
                    formFlexItem2.className = 'form-flex-item';
                    newForm.appendChild(formFlexItem2);

                        const deadlineSVG = document.createElement('img'); // Image/Icon (deadline.svg)
                        deadlineSVG.src = "assets/svg/deadline.svg";
                        deadlineSVG.className = 'form-svg';
                        deadlineSVG.style.width = '36px';
                        deadlineSVG.style.height = '36px';
                        formFlexItem2.appendChild(deadlineSVG);
            
                        const itemDateLabel = document.createElement('label'); // Date Label
                        itemDateLabel.textContent = 'Date:';
                        itemDateLabel.htmlFor = 'todo-item-deadline';
                        itemDateLabel.id = 'date-label';
                        formFlexItem2.appendChild(itemDateLabel);

                            const itemDate = document.createElement('input'); // Date Input
                            itemDate.type = 'date';
                            itemDate.setAttribute('max', '2021-12-31');
                            itemDate.id = 'todo-item-date';
                            formFlexItem2.appendChild(itemDate);

                    const formFlexItem3 = document.createElement('div'); // Flex Item 3
                    formFlexItem3.className = 'form-flex-item';
                    newForm.appendChild(formFlexItem3);

                        const timeSVG = document.createElement('img'); // Ticking Down Clock (Time) SVG (Image)
                        timeSVG.className = 'form-svg';
                        timeSVG.src = 'assets/svg/timeLeft.svg';
                        timeSVG.style.height = '36px';
                        timeSVG.style.width = '36px';
                        formFlexItem3.appendChild(timeSVG);

                        const itemTimeLabel = document.createElement('label'); // Time Label
                    
                        itemTimeLabel.textContent = 'Time:';
                        itemTimeLabel.id = 'time-label';
                        itemTimeLabel.htmlFor = 'todo-item-time';
                        formFlexItem3.appendChild(itemTimeLabel);

                        const itemTime = document.createElement('input'); // Time Input
                        itemTime.type = 'time';
                        itemTime.id = 'todo-item-time';
                        formFlexItem3.appendChild(itemTime);

            const formFlexItem4 = document.createElement('div'); // Flex Item 4 
            formFlexItem4.className = 'form-flex-item';
            formFlexItem4.id = 'fourth-flex-item'
            parent.appendChild(formFlexItem4);

                const buttonsDiv = document.createElement('div'); // Buttons Container
                buttonsDiv.className = 'buttons-container';
                formFlexItem4.appendChild(buttonsDiv);

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
    const itemDate = document.getElementById('todo-item-date');
    const timeOfDay = document.getElementById('todo-item-time');

    if (itemName.value.length === 0 || itemName.value.length > 25) { // If Empty or Too Long Input
        invalidTaskName();
    } 

    if (!itemDate.value) { // If Empty
        invalidDeadline();
    }

    if (!timeOfDay.value) { // If Empty
        invalidTime();
    }

    if (itemName.value.length > 0 && itemName.value.length <= 25 && itemDate.value.length > 0 && timeOfDay.value.length > 0) {
        createListItem();
    }
}

// Invalid Task Name (Extended Form)
function invalidTaskName() {
    const itemName = document.getElementById('todo-item-name');
    invalidFormInput(itemName);
}

// Invalid Deadline [input type="date"] (Extended Form)
function invalidDeadline() {
    const itemDate = document.getElementById('todo-item-date');
    invalidFormInput(itemDate);
}

// Invalid Time [input type="time"] (Extended Form)
function invalidTime() {
    const timeOfDay = document.getElementById('todo-item-time');
    invalidFormInput(timeOfDay);
}

// Successfully Creates a New List Item
function createListItem() {

    const itemName = document.getElementById('todo-item-name');
    const itemDate = document.getElementById('todo-item-date');
    const timeOfDay = document.getElementById('todo-item-time');

    const newItem = document.createElement('li'); // List Item
    newItem.className = 'list-item';
    listParent.appendChild(newItem);

        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        newItem.appendChild(itemContainer);

            const flexItem1 = document.createElement('div'); // Flex Container 1
            flexItem1.className = 'flex-item';
            itemContainer.appendChild(flexItem1);

                const arrowSVG = document.createElement('img'); // Arrow (Task) SVG (Image)
                arrowSVG.className = 'arrow-right-circle';
                arrowSVG.src = 'assets/svg/arrow.svg';
                flexItem1.appendChild(arrowSVG);

                const name = document.createElement('p'); // Task Name
                name.textContent = itemName.value;
                name.className = 'task';
                flexItem1.appendChild(name);

            const flexItem2 = document.createElement('div'); // Flex Container 2
            flexItem2.className = 'flex-item';
            itemContainer.appendChild(flexItem2);

                const deadlineSVG = document.createElement('img'); // Clock (Deadline) SVG (Image)
                deadlineSVG.src = 'assets/svg/deadline.svg';
                flexItem2.appendChild(deadlineSVG);

                const date = document.createElement('p'); // Date
                date.className = 'deadline';
                flexItem2.appendChild(date);  

            const flexItem3 = document.createElement('div'); // Flex Container 3
            flexItem3.className = 'flex-item';
            itemContainer.appendChild(flexItem3);

                const timeLeftSVG = document.createElement('img'); // Ticking Down Clock (Time) SVG (Image)
                timeLeftSVG.src = 'assets/svg/timeLeft.svg';
                flexItem3.appendChild(timeLeftSVG);

                const time = document.createElement('p'); // Time
                time.className = 'time-left';
                time.textContent = timeOfDay.value;
                flexItem3.appendChild(time);

            const flexItem4 = document.createElement('div'); // Flex Container 4
            flexItem4.className = 'flex-item';
            itemContainer.appendChild(flexItem4);

                const completeButton = document.createElement('button'); // Complete Task Button
                completeButton.className = 'complete-button';
                completeButton.setAttribute("onclick", "complete(this);");
                flexItem4.appendChild(completeButton);

                    const completeSVG = document.createElement('img'); // Complete Task SVG (Image)
                    completeSVG.src = 'assets/svg/completeButton.svg';
                    completeButton.appendChild(completeSVG);

                const deleteButton = document.createElement('button'); // Delete Task Button
                deleteButton.className = 'delete-button';
                deleteButton.setAttribute("onclick", "remove(this);");
                flexItem4.appendChild(deleteButton);

                    const deleteSVG = document.createElement('img'); // Delete Task SVG (Image)
                    deleteSVG.src = 'assets/svg/deleteButton.svg';
                    deleteButton.appendChild(deleteSVG);

    // Converts Date Input to "DayOfWeek + Date(13th, 14th etc.) + Month"
    const day = new Date(itemDate.value) + '';
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
    console.error(`todoInput.value had the value of --> "${todoInput.value}"`);
}

// Clears todoInput (QoL)
function inputClear() {
    todoInput.value = "";
}

function clearConfirmation() {
    const background = document.createElement('div'); // Background
    background.id = 'confirm-background';
    main.prepend(background);

        const container = document.createElement('div'); // Container
        container.className = 'container-xxl';
        container.id = 'confirm-container';
        background.appendChild(container);

            const parent = document.createElement('div'); // Parent
            parent.id = 'confirm-parent';
            container.appendChild(parent);

                const content = document.createElement('div'); // Content
                content.id = 'confirm-content';
                parent.appendChild(content);

                    const confirmTitle = document.createElement('h1'); // Title
                    confirmTitle.id = 'confirm-title';
                    confirmTitle.textContent = 'Delete All Tasks'
                    content.appendChild(confirmTitle);

                    const confirmText = document.createElement('p'); // Text
                    confirmText.id = 'confirm-text';
                    confirmText.textContent = 'Are you sure that you want to delete all tasks on your todo list?'
                    content.appendChild(confirmText);

                    const buttonsContainer = document.createElement('div'); // Buttons Container
                    buttonsContainer.id = 'confirm-buttons-container';
                    content.appendChild(buttonsContainer);

                        const buttonNo = document.createElement('button'); // "No" Button
                        buttonNo.type = 'button';
                        buttonNo.textContent = 'No';
                        buttonNo.id = 'option-no';
                        buttonsContainer.appendChild(buttonNo);

                        const buttonYes = document.createElement('button');
                        buttonYes.type = 'button';
                        buttonYes.textContent = 'Yes';
                        buttonYes.id = 'option-yes';
                        buttonsContainer.appendChild(buttonYes);

    buttonNo.addEventListener('click', () => {
        clearDeleteElements();
    });

    buttonYes.addEventListener('click', () => {
        clearAllItems();
        clearDeleteElements();
    });
}

function clearDeleteElements() {
    const background = document.getElementById('confirm-background');

    if (background.hasChildNodes) { // If background has child elements
        background.removeChild(background.firstChild);
        main.removeChild(background);
    } else { // Unexpected Error
        console.error('Unexpected Error while deleting children of background.')
    }
}

// Remove All Items
function clearAllItems() {
    while (listParent.firstChild) {
        listParent.removeChild(listParent.lastChild)
    }

    if (!listParent.lastChild) {
        todoInput.value = '';
        todoInput.placeholder = 'Items have been removed!';

        invalidFormInput(todoInput);

        setTimeout(() => {
            todoInput.placeholder = 'Add to your todo list';
        }, 2000);
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

    if (taskName.classList.length === 2) {
        task.style.background = '#006E12';
    } else if (taskName.classList.length === 1) {
        task.style.background = '#191923';
    } else {
        console.error('Unexpected length / items in array!');
    }
}

// Delete List Item
function remove(element) {
    element.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode);
}
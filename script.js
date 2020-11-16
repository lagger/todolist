function addTask(){
    var taskInput = document.getElementById("task");
    if (taskInput.value != ""){
        var taskList = document.getElementById("taskList");
        var divEntry = document.createElement('div');
        divEntry.className = "listItem";
        var liEntry = document.createElement('li');
        //
        liEntry.appendChild(document.createTextNode(taskInput.value.toUpperCase()));
        divEntry.appendChild(liEntry);
        //
        var doneButton = createButton("DONE","done button");
        doneButton.addEventListener("click", deleteTask)
        divEntry.appendChild(doneButton);

        taskList.appendChild(divEntry);
        taskInput.placeholder = "DODAJ ZADANIE"
        taskInput.value = "";
    }
    else{
        taskInput.placeholder = "WPISZ ZADANIE!"
    }
    taskInput.focus();
}

function deleteTask(){
    this.parentElement.remove();
    document.getElementById("task").focus();
}

function createButton(buttonValue, buttonClass){
    var doneButton = document.createElement('input');
    doneButton.type="button";
    doneButton.className=buttonClass;
    doneButton.value=buttonValue;
    return doneButton;
}


function load(){
    document.getElementById("addButton").addEventListener("click",addTask);
    document.getElementById("task").addEventListener("keyup", function(event){
        if(event.key=="Enter"){
            addTask();
        }
    })
}
var clicked = false;
var doneTasks = [];
var currentTasks = [];

function addTask(){
    var taskInput = document.getElementById("taskInput");
    var taskInputValue = taskInput.value;
    if (taskInputValue != ""){
        var taskList = document.getElementById("taskList");
        var liEntry = document.createElement('li');
        liEntry.className = "listItem";
        var pEntry = document.createElement('p');
        //
        pEntry.appendChild(document.createTextNode(taskInputValue.toUpperCase()));
        liEntry.appendChild(pEntry)
        //
        var doneButton = createButton("DONE","done button",deleteTask);

        liEntry.appendChild(doneButton);
        taskList.appendChild(liEntry);

        currentTasks.push(taskInputValue.toUpperCase());
        sessionStorage.setItem("currentTasks", JSON.stringify(currentTasks));
        taskInput.placeholder = "DODAJ ZADANIE"
        taskInput.value = "";
    }
    else{
        taskInput.placeholder = "WPISZ ZADANIE!"
    }
    taskInput.focus();
    console.log(currentTasks);

}

function deleteTask(){
    this.parentElement.remove();
    doneTasks.push(this.parentElement.children[0].innerHTML);
    document.getElementById("taskInput").focus();
    sessionStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    currentTasks.splice(currentTasks.indexOf(this.parentElement.children[0].innerHTML), 1)
    sessionStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    console.log(currentTasks);
}

function createButton(buttonValue, buttonClass, buttonEventFunction){
    var doneButton = document.createElement('input');
    doneButton.type="button";
    doneButton.className=buttonClass;
    doneButton.value=buttonValue;
    doneButton.addEventListener("click", buttonEventFunction)
    return doneButton;
}

function showMenu(){
    var navigationBarItems = document.getElementById("navigationBarItems");
    if (!clicked){
        navigationBarItems.setAttribute("style", "opacity: 1; pointer-events: all");
        
    }
    else{
        navigationBarItems.setAttribute("style", "opacity: 0; pointer-events: none");
    }
    clicked = !clicked;
}


function load(){
    document.getElementById("addButton").addEventListener("click",addTask);
    document.getElementById("menuButton").addEventListener("click", showMenu);
    document.getElementById("taskInput").addEventListener("keyup", function(event){
        if(event.key=="Enter"){
            addTask();
        }
    })
    currentTasks = JSON.parse(sessionStorage.getItem("currentTasks")) || [];
    doneTasks = JSON.parse(sessionStorage.getItem("doneTasks")) || [];
    for (var i = 0; i < currentTasks.length; i++){
        var taskList = document.getElementById("taskList");
        var liEntry = document.createElement('li');

        var pEntry = document.createElement('p');
        //
        pEntry.appendChild(document.createTextNode(currentTasks[i]));
        liEntry.appendChild(pEntry);
        //

        var doneButton = createButton("DONE","done button",deleteTask);
        liEntry.appendChild(doneButton);
        taskList.appendChild(liEntry);
    }

}

function loadDoneTasks(){
    document.getElementById("menuButton").addEventListener("click", showMenu);
    let doneTasks = JSON.parse(sessionStorage.getItem("doneTasks")) || [];
    for (var i = 0; i < doneTasks.length; i++){
        var doneTaskList = document.getElementById("doneTaskList");
        var liEntry = document.createElement('li');
        liEntry.className = "doneListItem";
        var pEntry = document.createElement('p');
        pEntry.appendChild(document.createTextNode(doneTasks[i]));
        liEntry.appendChild(pEntry)
        doneTaskList.appendChild(liEntry);
    }
    console.log(doneTasks);
}

//TODO onload ???????????????????????
//TODO single responsibility principle
//TODO rozwinąć stronę i wydzielić moduły
//TODO poczytaj o importach


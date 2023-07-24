function addingTask() {
    var inputText = document.getElementById("taskInput");
    var task = inputText.value;
    inputText.value = "";
  
    if (task === "") {
        alert("Please enter a task before adding.");
        return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(task));
    taskList.append(li);
  }
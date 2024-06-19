function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText.trim() !== "") {

    if (taskText.length < 25) {
      const card = document.createElement("div");
      card.classList.add("card");

      const taskList = document.createElement("ul");
      const li = document.createElement("li");
      li.innerText = taskText;

      const editButton = document.createElement("button");
      editButton.innerText = "Düzenle";
      editButton.onclick = function() { editTask(this); };

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Sil";
      deleteButton.onclick = function() { deleteTask(this); };

      taskList.appendChild(li);
      taskList.appendChild(editButton);
      taskList.appendChild(deleteButton);

      card.appendChild(taskList);
      const cardContainer = document.getElementById("card-container");
      cardContainer.appendChild(card);

      taskInput.value = "";
    } else {
      alert("Maksimum karakter sınırını aştınız!");
    }

  } else {
    alert("Lütfen bir görev girin.");
  }
}

function deleteTask(button) {
  const card = button.parentElement.parentElement;
  card.remove();
}

function editTask(button) {
  const li = button.parentElement.firstChild;
  const newTaskText = prompt("Yeni görev girin:", li.innerText);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    li.innerText = newTaskText;
  }
}
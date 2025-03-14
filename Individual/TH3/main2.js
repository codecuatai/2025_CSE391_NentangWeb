document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

var form = document.querySelector("form");
var list = document.querySelector("#list");

form.querySelector("button").onclick = function (event) {
  event.preventDefault();
  var content = form.querySelector("input").value;
  //kiem tra xem xau nhập vào có rỗng ko nếu rỗng thông báo nhập
  if (content.trim() === "") alert("Nhập vào tên công việc");
  const task = { text: content, isDone: false };
  addli(task);
  saveTaskToLocalStorage(task);
};

// them vao danh sach
function addli(task) {
  // tạo thẻ li và gán giá trị content cho li
  var newli = document.createElement("li");
  var newp = document.createElement("p");
  newp.textContent = task.text;
  //tạo ra 1 nút button và thêm nó vào newli
  var buttonchild = document.createElement("button");
  buttonchild.style.backgroundColor = "red";
  buttonchild.style.color = "white";
  buttonchild.textContent = "Xóa";

  newli.appendChild(newp);
  newli.appendChild(buttonchild);
  //thêm  newli vào cuối danh sách
  list.appendChild(newli);
  // xóa giá trị vừa nhập vào
  form.querySelector("input").value = "";
}

//xóa đi danh sách
list.addEventListener("click", function (event) {
  //target trả về element cụ thể mà người đó tương tác
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    var text = event.target.parentElement.querySelector("p").textContent;
    removeTaskFromLocalStorage(text);
  }
  // đánh dấu hoàn thành
  if (event.target.tagName === "P") {
    if (event.target.style.color === "green") {
      event.target.style.textDecoration = "none";
      event.target.style.color = "black";
    } else {
      event.target.style.textDecoration = "line-through";
      event.target.style.color = "green";
    }
  }
});

function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addli);
}
function removeTaskFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

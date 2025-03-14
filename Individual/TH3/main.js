document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);
var form = document.querySelector("form");
var list = document.querySelector("#list");

//bắt kiện khi thêm
form.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  var newjob = form.querySelector("input").value;
  if (newjob.trim() === "") {
    alert("XIN HAY NHAP TEN CONG VIEC");
    return;
  }
  var task = { text: newjob, isDone: false };
  addjob(task);
  saveTasksToLocalStorage(task);
  form.querySelector("input").value = "";
});
//bắt sự kiến xóa và sửa
list.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    var jobname = event.target.parentElement.querySelector("p").textContent;
    removeTaskFromLocalStorage(jobname);
  }
  if (event.target.tagName.toUpperCase() === "P") {
    var jobname = event.target.textContent;
    updateIsDone(jobname);
    if (event.target.style.color === "gray") {
      event.target.style.textDecoration = "none";
      event.target.style.color = "black";
      event.target.style.backgroundColor = " rgb(240, 240, 240)";
    } else {
      event.target.style.textDecoration = "line-through";
      event.target.style.color = "gray";
      event.target.style.backgroundColor = "aqua";
    }
  }
});

//cập nhập trạng thái isdone cho localstorage
function updateIsDone(jobname) {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map(function (task) {
    if (task.text === jobname) {
      if (task.isDone === false) task.isDone = true;
      else task.isDone = false;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//thực hiện hàm thêm sự kiện
function addjob(task) {
  var jobname = task.text;
  //tạo ra 3 thẻ
  var newli = document.createElement("LI");
  var newp = document.createElement("P");
  var newbutton = document.createElement("BUTTON");
  //gán nội dung cho thẻ p và button
  newp.textContent = jobname;
  newbutton.textContent = "Xóa";
  newbutton.style.backgroundColor = "red";
  newbutton.style.color = "white";
  // chèn thẻ p và button vào thẻ li
  if (task.isDone === true) {
    newli.style.textDecoration = "line-through";
    newli.style.color = "gray";
    newli.style.backgroundColor = "aqua";
  }
  newli.appendChild(newp);
  newli.appendChild(newbutton);
  //chèn thẻ li vào cuối thẻ ul
  list.appendChild(newli);
}
//hàm lưu vào localStorage
function saveTasksToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//hàm load dữ liệu về trên localstorage
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addjob);
}
//hàm xóa dữ liệu trên localstorage
function removeTaskFromLocalStorage(jobname) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.text !== jobname);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

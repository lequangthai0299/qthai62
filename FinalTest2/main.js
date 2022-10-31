let tasks = getTaskFromLocalStorage();
var countId = 0;
// const taskName = $(".post-input");
// $(".btn-post").on("click", () => {
//   if (!taskName.value) {
//     alert("Please enter task");
//     return false;
//   }
// });

function post() {
  countId++;
  var postInput = $(".post-input").val();
  $(".post-list").append(`
    <div class = "post-iteam" id="${countId}"> 
    
    <div class ="post-content${countId}">${postInput}</div>
    
    <div class = btnGroup${countId}>
    <button onclick = "startUpdate(${countId})"> Update </button>
    <button onclick = "deletePost(${countId})"> Delete </button>
    
    </div>
    </div>
    
  `);
  var tasks = getTaskFromLocalStorage();
}

function deletePost(id) {
  $(`#${id}`).remove();
}

function startUpdate(id) {
  var oldValue = $(`.post-content${id}`).html();
  console.log(oldValue);
  $(`.btnGroup${id}`).remove();
  $(`.post-content${id}`).append(`
    <div>
    <input type = 'text' value ="${oldValue}" class="newValue${id}">
    <button onclick = "confirmButton(${id})">Confirm</button>
    </div>
    
    `);
}

function confirmButton(id) {
  var newValue = $(`.newValue${id}`).val();
  $(`#${id}`).html("");
  $(`#${id}`).append(`
    <div class ="post-content${id}">${newValue}</div>
    
    <div class = btnGroup${id}>
    <button onclick = "startUpdate(${id})"> Edit </button>
    <button onclick = "deletePost(${id})"> Delete </button>
    </div>
  `);
}

function getTaskFromLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
}

function sort() {
  $(".btn-sort").on("click", () => {});
}

var product = [
  {
    id: 1,
    name: "Shirt",
    quantum: 5,
  },
  {
    id: 2,
    name: "Blazer",
    quantum: 5,
  },
  {
    id: 3,
    name: "Pants",
    quantum: 5,
  },
  {
    id: 4,
    name: "Bag",
    quantum: 5,
  },
];

$("#save-btn").on("click", function (e) {
  let content = "";
  product.forEach((item) => {
    content += `<div class="card col-6 p-2" style"width: 18rem">
    <img class="card-img-top" src="" >
    <div class="card-body">
    <h5 class="card-title">${item.id} </h5>
    <p class="card-text">${item.name} </p>
    <a href="#" class="btn-primary">${item.quantum}</a>
    </div>
    </div>
    `;
    $("#content").html(content);
  });
});

var countId = 0;

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
}

function deletePost(id) {
  $(`#${id}`).remove();
}

function startUpdate(id) {
  var oldValue = $(`.post-content${id}`).html();
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
var sorted = [];
function sortIteam() {
  for (var sort1 in product) {
    sorted.push([sort1, product[sort]]);
  }
  sorted.sort(function (a, b) {
    return a[1] - b[1];
  });
}

var myJSOn = JSON.stringify(product);
localStorage.setItem("test", myJSOn);

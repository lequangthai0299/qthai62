const getElementById = document.getElementById("intro");
document.getElementById("intro").innerHTML =
  "This is get Element By ID" + getElementById.innerHTML;

const h3Element = document.querySelector("h3");
h3Element.onclick = function () {
  console.log(Math.random());
};

getElementById.style = "color: green";

getElementById.addEventListener("click", function () {
  document.getElementById("intro").innerHTML = "Hello World";
});

const getSpan = (document.getElementById("span").onclick = function () {
  alert("Success....");
});

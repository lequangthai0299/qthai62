function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.target.id;
}

function drop(ev) {
  ev.target.append(document.getElementById("drag1"));
}

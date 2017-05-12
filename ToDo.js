var node = document.getElementById('parent');
var numChildren = node.children.length
console.log(numChildren);

function repeat() {
  var input = document.getElementById('myInput');
  var label = document.getElementById('myLabel');
  label.innerText = input.value;
}

function addMessage() {
  var input = document.getElementById('myInput');
  var list = document.getElementById('messages');
  var li = document.createElement("li")
  li.innerHTML = input.value;
  list.appendChild(li);
  input.value = '';
  var label = document.getElementById('myLabel');
  myLabel.innerHTML = '';
}
  function clearList() {
  var list = document.getElementById('messages');
  var label = document.getElementById('myLabel');
  list.innerHTML = '';
  label.innerText = '';
}

var toAdd = document.createDocumentFragment();
for(var i=1; i < 6; i++){
   var newDiv = document.createElement('div');
   newDiv.innerText = 'element'+' '+i;
   newDiv.className = 'element';
   toAdd.appendChild(newDiv);
   console.log(newDiv)
}
var parentDiv = document.getElementsByClassName('container')[0];
parentDiv.appendChild(toAdd);




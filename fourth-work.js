function onButtonClick() {
    var parentDiv = document.getElementById('container');
    var newDiv = document.createElement('div');
    console.log(newDiv);
    newDiv.className = 'element';
    newDiv.innerText = 'Element';
    parentDiv.appendChild(newDiv);
}
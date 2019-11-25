// var div1 = document.getElementById('div-1');
// console.log(div1);
function onButtonClick() {
    let input = document.getElementById('my-input');
    input.value = parseInt(input.value) + 1;
}

var button = document.getElementsByTagName('button')[0];
button.onclick = onButtonClick;

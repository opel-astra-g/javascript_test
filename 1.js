var button = document.querySelector('button');
var box = document.getElementById('change');

//button.onclick = function changecolor(){
function changecolor(){
    if (box.style.background == 'blue'){
        box.style.background = 'green';
    }else{
         box.style.background = 'blue';
    }
}


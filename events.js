function makeRed(){
    document.body.style.backgroundColor = 'red';
}

let makeBlueBtn = document.getElementById('makeBlue');

makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

let pinkBtn = document.getElementById('makePink');

// option four
pinkBtn.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
});

//final option
document.getElementById('makeOrange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
});
let mainDiv = document.getElementById('div1');

mainDiv.addEventListener('click', (e) =>{
    e.stopPropagation;
    let wordArr = e.target.innerText.split(' ');
    alert(wordArr[0] + ' ' + wordArr[1] );
});
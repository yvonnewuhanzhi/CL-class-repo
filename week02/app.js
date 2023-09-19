

var button = document.getElementById('button');
var textContainer = document.getElementById('textContainer');



button.addEventListener("mouseover", changeColor);
function changeColor(){
    button.style.backgroundColor = "#c995cc"; 
}
button.addEventListener("mouseout", restoreColor);
function restoreColor() {
    button.style.backgroundColor = "#e8838d"; 
}



button.addEventListener("click", addText);
function addText() {
   
    let paragraph = document.createElement('p');
    paragraph.textContent = "I turn the page in horror\nas I see it's double sided."; 

    paragraph.classList.add('new-paragraph');

    // 设置段落元素的white-space属性，以允许自动换行
    paragraph.style.whiteSpace = 'pre-line';

    // 将新的段落元素添加到文本容器中
    textContainer.appendChild(paragraph);
}


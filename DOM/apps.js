document.addEventListener("DOMContentLoaded", function(){
    //creating an ordered list so each objective performed is numbered
    let list = document.createElement('ol');
    document.body.appendChild(list);

    //making a button appear when HTMl is loaded
    let button = document.createElement('button');
    let btnTxt = document.createTextNode("Click Me");
    button.appendChild(btnTxt);
    let li = document.createElement('li');
    li.appendChild(button);
    list.appendChild(li);

    //When button is clicked an alert message with a nice message appears
    button.addEventListener("click", function(){
        alert("Have a good day!");
    })

    //making a second button and a text box
    let button2 = document.createElement('button');
    let btn2Txt = document.createTextNode("Click Here");
    button2.appendChild(btn2Txt);
    let textBox = document.createElement('input');
    textBox.setAttribute("type", "text");
    let li2 = document.createElement('li');
    li2.appendChild(button2);
    li2.appendChild(textBox);
    list.appendChild(li2);
})
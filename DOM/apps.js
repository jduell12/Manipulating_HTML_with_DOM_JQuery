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
})
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
    li2.appendChild(textBox);
    li2.appendChild(button2);
    list.appendChild(li2);

    //when button2 is clicked an alert is displayed with the text that is typed in the text box
    button2.addEventListener("click", function(){
        alert(textBox.value);
    })

    //Create a div element in HTML
    let div1 = document.createElement('div');
    div1.style.backgroundColor = "green";
    div1.style.padding = "50px";
    let li3 = document.createElement('li');
    li3.appendChild(div1);
    list.appendChild(li3);
    //When mouse hovers over the div the background color changes. Div returns to normal when the mouse leaves the div 
    div1.addEventListener("mouseover", function(){
        div1.style.backgroundColor = "blue";
    });

    div1.addEventListener("mouseleave", function(){
        div1.style.backgroundColor = "green";
    })

    //create a paragraph with text 
    let para1 = document.createElement('p');
    let para1Text = document.createTextNode("What is a sentance? You just said it.");
    para1.appendChild(para1Text);
    let li4 = document.createElement('li');
    li4.appendChild(para1);
    list.appendChild(li4);

    //When you click the paragraph the color of the text switches to a random color 
    let colors = ["blue", "green", "red", "pink", "purple", "black", "orange", "yellow", "brown", "teal", "gray"];
    let randNum = Math.floor(Math.random() * colors.length);
    para1.addEventListener("click", function(){
        para1.style.color = colors[randNum];
    });
})
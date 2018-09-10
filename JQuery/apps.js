//Checks to see HTML has loaded before running
$(document).ready(function(){

    //Creating a div element and appending it to the body
    let div = document.createElement("div");
    $("body").append(div);
    
    //Creating an ordered list and appending it to the div
    let ol = document.createElement("ol");
    $("div").append(ol);

    //Creating the first list item
    let li1 = document.createElement("li");
    $("ol").append(li1);
    //Make button appear 
    let button1 = document.createElement("button");
    let btnTxt = document.createTextNode("Click Me");
    $(button1).append(btnTxt);
    $(li1).append(button1);
    //When button is clicked a nice message with appear
    $(button1).click(function(){
        alert("Have a good day!");
    });

    //Creating second list item
    let li2 = document.createElement("li");
    $(ol).append(li2);
    //Create a button and text box
    let btn2 = document.createElement("button");
    let btn2Txt = document.createTextNode("Click Here");
    $(btn2).append(btn2Txt);
    let txtBox = document.createElement("input");
    txtBox.setAttribute("type", "text");
    $(li2).append(txtBox);
    $(li2).append(btn2);
    //When second button is clicked an alert with the message typed in the text box will appear
    $(btn2).click(function(){
        alert($(txtBox).val());
    });

});
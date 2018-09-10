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

});
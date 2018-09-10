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

    //Creating third list item
    let li3 = document.createElement("li");
    $(ol).append(li3);
    //Create a div
    let div2 = document.createElement("div");
    $(li3).append(div2);
    $(div2).css({"background-color": "blue", "height": "5em"});
    //When mouse hovers over div the background color changes 
    $(div2).mouseover(function(){
        $(div2).css("background-color", "green");
    });
    $(div2).mouseleave(function(){
        $(div2).css("background-color", "blue");
    });

    //Creating fourth list item
    let li4 = document.createElement("li");
    $(ol).append(li4);
    //Create a paragraph with text. 
    let p = document.createElement("p");
    let pTxt = document.createTextNode("Learning how to use Jquery to mainpulate an HTML page is very interesting. It's quite fascinating how you can manipulate the DOM with JavaScript or Jquery and get the same result. Just goes to show how flexible coding is and that there is no one right solution to a problem.");
    $(p).append(pTxt);
    $(li4).append(p);
    //When the user clicks on the paragraph it turns a random color
    $(p).click(function(){
        let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $(p).css("color", randomColor);
    });

    //Creating fifth list item
    let li5 = document.createElement("li");
    $(ol).append(li5);
    //Create a button 
    let btn3 = document.createElement("button");
    let btn3Txt = document.createTextNode("Click to see my name");
    $(btn3).append(btn3Txt);
    $(li5).append(btn3);
    //Create an empty div
    let div3 = document.createElement("div");
    $(div3).css({"background-color": "aliceblue", "height": "5em"})
    $(li5).append(div3);
    //When button is clicked a span that contains my name will be added to the div
    $(btn3).click(function(){
        let span = document.createElement("span");
        let spanTxt = document.createTextNode("Jessica");
        $(span).append(spanTxt);
        $(div3).append(span);
    });
});
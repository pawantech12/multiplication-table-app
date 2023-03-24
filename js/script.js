// code by Pawan Kumavat
// Multiplication Table using HTML,CSS and Javascript
// First we will create a funtion for logic of multiplication
// it is recommended to use arrow funtion instead of creating basic function 
multiply = () => {
    // we will get input from input box using its id 
    var n = document.getElementById('userinput').value; //it will store the value of input box in variable 'n'
    
    var out = "";
    // now we will use for loop for displaying table
    for (var i = 1; i <= 10; i++) { //you can also use while loop
        out =out + n + " X " + i + " = " + i * n + "<br/>"; //this is the logic where the 'n' and 'i' value is printed with multiplication of both i and n 
        // just like this 
        // 2 X 1 = 2 here 2 is the value of n and 1 is the value of i and 2 is the result 
    }
    // after writing logic we will display this in webpage i.e. in html document 
    // we will get the display id and by using .innerHTML we will display the output
    document.getElementById("display").innerHTML ="Multiplication Table Of " + n + "<br/> <br/>" + out;
}
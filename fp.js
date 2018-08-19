/* This code is written as a function which allows you to call the function named menu() anywhere else later in the code with out having 
to re-write it all over again. Note:  By putting the variables inside the function{} block they are local and can only be use by this 
block when ever called. */
function menu() {
    var food = prompt("We have chicken, beef or pork on the menu.");
    var choice1 = ("chicken");
    var choice2 = ("beef");
    var choice3 = ("pork");
    if (food === choice1) {
        document.write(food + " it is then.");
    } else if (food === choice2) {
        document.write("I can do " + food + " I guess.");
    } else if (food === choice3) {
        document.write("Yeah " + food + " is the shit.");
    } else {
        document.write("How bout trying something from the menu!");
    }
};
menu();

/* Writing it this way as just a simple if else statements means if you wanted to use this same block again later in the code
you would have to write this whole block all over again. You could copy and paste it but typing menu() is faster. */
/*
var food = prompt("We have chicken, beef or pork on the menu.");
var choice1 = ("chicken");
var choice2 = ("beef");
var choice3 = ("pork");
if (food === choice1) {
    document.write(food + " it is then.");
} else if (food === choice2) {
    document.write("I can do " + food + " I guess.");
} else if (food === choice3) {
    document.write("Yeah " + food + " is the shit.");
} else {
    document.write("How bout trying something from the menu!");
};*/

// JAVASCRIPT TUTORIAL LESSONS 


// Create and define variables

var myVar = 5; 
var myVarNumber = 10;

var myVar = 5;
myVar + myVarNumber == 15;


// Conditional Statements - If and Else

if (myVar > myVarNumber) {

    document.write ("Hey! myVar is the smaller number between the two!");
}
else {

    document.write ("myVar is no longer the smaller number");
}


// Loops - WHile


while (myVarNumber > myVar) {

    document.write ("Wow, myVarNumber is greater than myVar..   .");
    myVar++;
}



while (myVar > 20) {

    console.log ("Your age is less than 20");
    myVar++;
}


// Links to HTML document

var links = document.getElementsByTagName("a");

for (i=0; i<20; i++) {

    console.log("this is the link number" + i);

}

document.write ("all links have now looped");



// Functions

function getAverage = (a + b) / 2 ; {

    var average = (a + b) / 2;
    console.log(average);
    return average; 

}

// Functions and Variables logged to console

var myResult = getAverage (7 + 5);
console.log("the average is " + myResult);


// Mathematical Properties - 'Math.'

console.log(Math.round);
console.log(Math.PI);
console.log(Math.Max);
console.log(Math.Min);


// Arrays

var MyArray = [];

myArray[0] = 5;
myArray[1] = 10;
myArray[2] = 15;
myArray[3] = 20;
myArray[4] = 25;
console.log(myArray)

var myArray3 = new Array();
var myArray4 = new Array(5);

// Array properties and functions

myArray.length;
myArray.sort();
myArray.reverse();

// Object properties and functions

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){ console.log("now driving");};

myCar.drive();

// Object function + properties, equation logged to console

var myCar2 = {

    maxSpeed: 60, 
    driver: "Luca", 
    drive: function(){ console.log("now driving again");} 

};

console.log(myCar.maxSpeed);
myCar2.drive();

// Object function: given a speed and time value= distance travelled

var myCar2 = {

    maxSpeed: 60, 
    driver: "Luca", 
    drive: function(speed, time){ 
        console.log(speed * time);
    } 

};

console.log(myCar.maxSpeed);
myCar2.drive(50, 3);


// THIS keyword - used to log specifics in the console

var myCar4 = {

    maxSpeed: 70,
    driver: "Alice",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is" + this.driver);

    }

};

myCar4.logDriver();
console.log(myCar4.maxSpeed);
myCar4.drive(60, 4);


// THIS keyword - used for 2 Objects

var myCar10 = {

    maxSpeed: 65,
    driver: "Bob",
    drive: function(speed, time){              // Object 1
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

var myCar11 = {

    maxSpeed: 75,
    driver: "Jim",
    drive: function(speed, time){              // Object 2
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

myCar10.test();                               // Console log information
myCar11.test();              
console.log(myCar11.maxSpeed);
myCar11.drive(75, 3);


// Constructor Functions 

var Car5 = function(maxSpeed, driver){                               // Use of 1 function to control var objects

        this.maxSpeed = maxSpeed;
        this.driver = driver;         
        this.drive = function(speed, time){    
            console.log(speed * time);
        };                                                           // Need to log function info after declaring one
        this.logDriver = function(){
            console.logDriver("driver name is"+ this.driver);
        };
}

var myCar5 = new Car(80, "Jackson");                                 // Create multiple Object variables through declaring new Objects to the Constructor Function
var myCar6 = new Car(90, "Thomas");
var myCar7 = new Car(95, "Bert");
var myCar8 = new Car(85, "Zein");
var myCar9 = new Car(75, "Ninja");

myCar5.drive(35, 5);
myCar8.logDriver();


// The Date Object - dynamic 

var myDate = new Date();                        // The date/time updates accordingly 
console.log(myDate);

// Past and Future Dates 

var myPastDate = new Date(1500, 11, 2, 10, 31, 33);                     // Year, Month, Day, hours, minutes, seconds
var myFutureDate = new Date(2300, 10, 3, 10, 31, 33);

console.log(myPastDate);
console.log(myFutureDate);


// Birthday console logs available 

var birthday = new Date(1985, 0, 15, 11, 15, 33);
var birthday2 = new Date(1985, 0, 15, 11, 15, 33);

// get the month of the date(0-11)
console.log(birthday.getMonth());

// get the full year (YYYY)
console.log(birthday.getFullYear());

// get the date of the month (1-31)
console.log(birthday.getDate());

//get the day of the week (0-6)
console.log(birthday.getDay());

// get the hour of the date (0-23)
console.log(birthday.getHours());

// get the number of the milliseconds since 1st Jan 1979
console.log(birthday.getTime());

// Example for the use of .getTime with 2 birthdays

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal");

}   else{

    console.log("birthdays are not equal");                 // .getTime used as 'birthdays' are seen as 2 different objects

}                                                           

// DOM - Document Object Model 

document.getElementsByClassName("content");          // will get all elements with the class name "content"

var myContentDivs = document.getElementsByClassName("content");    // will create a variable for specific .get method ("content")

myContentDivs           // will define the variable "myContentDivs" ; will be presented in an array

document.getElementsByTagName("");   // TagNames can be used too to .get elements 
document.getElementById("");         // Id can be used to .get elements 


// 2 'properties' for changing page content, using the DOM ('body' tag for example)


// #1  .innerHTML (to change the HTML tags of a page)

var myBody = document.getElementsByTagName("body");    // .get the element using the DOM ('body')

myBody                  // define the variable - object

myBody[0].innerHTML;    // state the 'array'position [0], and use the '.innerHTML' property to target all the content within the 'body HTML'


// #2 .textContent (for h1, h2, <p>, etc.)

var myTitle = document.getElementById("page-title");     // specify the ID name that is being selected
myTitle                 // define the variable - object
myTitle.textContent;    // use the '.textContent' property to nest down into the elements text
myTitle.textContent = "the new text will appear instead of the current!";   // the new text shall appear on screen


// Changing Element Attributes

var link = document.getElementById("test1");    // select the element 
link                                            // define the variable - object in the console
link.getAttribute("href");                      // use .getAttribute to find the exact attribute value of the element 
link.getAttribute("class");
link.setAttribute("class", "test2");            // use .setAttribute to change or add new values to classes, IDs, etc. (2 values)
link.className;                                 // define the name of the class used in 'link'
link.className = "test3";                       // used to change the class name to 'test3'


// Changing CSS Styles

var title = document.getElementById("test1");

title.setAttribute("style", "position: relative");     // use to add a style, 'position: relative'
title.setAttribute("style", "position: relative; left: 15px;"); // can add multiple styles within the style()

title.style.top = "10px";                              // add style properties with the '.style' element 
title.style.position = "relative";
title.style.color = "green";
title.style.backgroundColor = "red";


// Adding Elements to the DOM

var newLi = document.createElement("li");       // use .createElement to add an 'li' to the DOM
newLi                                           // define the variable - object
var newA = document.createElement("a");         // use .createElement to add an 'a' tag to the DOM
newA                                            // define the variable - object
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]; // to selected a nested element within
menu                                            // define the variable - object


menu.appendChild(newLi);                        // use .appendChild to insert elements at the end 
menu.appendChild(newA);
newA.innerHTML = "Blog";                       // use .innerHTML to add HTML elements within the element ('newA')

menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);      // use .insertBefore() to insert elements at the begining 


// Removing Elements from the DOM

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];     // define the 'parent' element 
parent                                                                              // define the variable - object
var child = parent.getElementsByTagName("li")[0];
child                                                                               // define the variable - object
var removed = parent.removeChild(child);                                            // remove selected 'child' elements from parent

parent.appendChild(removed);                                                        // add the removed 'child' to the end
parent.insertBefore("li")[0];                                                       // add the removed 'child' to the beginning 


// Intro to JS Events 

var title = document.getElementById("page-title");                                  // define the variable - object you're targeting
title.onclick = function(){
    alert("you clicked on me");                                                     // use of .'onclick' and '.onmouseover' as event functions
};                                                                                  // 'alert' function used for feedback to the event function
title.onmouseover = function(){
    alert("you hovered your mouse over me :)");
};

// The Window On-Load Event (used so that the window is fully loaded before any JS events take place)
// (helps when the JS script in the HTML is written in the <head>, allowing for the content below it to load and still work)

window.onload = function(){

    setUpEvents();                      // define the 'setUpEvents' function to window.onload the JS code once the window has loaded
};


// JS Timers

// Option #1 

var myMessage = document.getElementById("message");     // define and .get the variable you are wanting to target

function showMessage(){                                 // use of 'function' on 'showMessage' appears once a 'setTimeout' has been defined
            
    myMessage.className = "show";
}

setTimeout(showMessage, 3000);                          // 'setTimeout' function is defined, which will allow 'showMessage' to appear

// Option #2

var colorChanger = document.getElementById("color-changer");    // define and .get the variable object you are wanting to target
var colors = ["red", "blue", "green", "pink"];                  // set an 'array' of the colors within the animation
var counter = 0;                                                // set the 'counter' for the variable object

function changeColor (){                                        // use an 'if function' to assist when the colors exceed the max.counter

    if (counter > colors.length){

        counter = 0;
    }

    colorChanger.style.background = colors[counter];             // add .style to the .background of the variable object 'colorChanger
    counter++;                                                   // use of '++' to increase the 'counter' incrementally

}

var myTimer = setInterval(changeColor, 3000);                    // variable defined to 'setInterval' so the color changes every 3000ms

colorChanger.onclick = function(){                               // '.onclick' event to 'colorChanger' with added function 

    clearInterval(myTimer);                                      // use of 'clearInterval' to end 'myTimer' variable after 3000ms
    colorChanger.innerHTML = "Timer has stopped";                // use of '.innerHTML' to change the HTML text to "Timer has stopped"
                                                                 
};

// Accessing Form Elements

document.forms.myForm;                                            // select 'myForm'
var myForm = document.forms.myForm;                               // define 'myForm' within an object variable

myForm.name                                                       // select 'name' in myForm
myForm.name.value                                                 // select 'name value' in myForm
myForm.color.value                                                // select 'color value' in myForm


myForm.name.onfocus = function(){                                 // create a '.onfocus' function for the 'name' input 

    myForce.name.style.border = "4px solid red";
};
myForm.name.onblur = function(){                                  // create a '.onblur' function for the 'name' input 

    myForce.name.style.border = "none";
};


// VERY Simple Form Validation

var myForm = document.forms.myForm;                                // select 'myForm'
var message = document.getElementsById("message");                 // define an object variable for 'message'

myForm.onsubmit = function(){                                      // use of '.onsubmit' function for error validation 

    if(myForm.name.value == ""){                                   // conditional statement if NO NAME SUBMITTED
        message.innerHTML = "please enter a name";          
        return false;                                              // statement is FALSE
    } else {
        message.innerHTML = "";                                    // conditional statement is CORRECT (SUBMITTED)
        return true;                                               // statement is TRUE
    }
};



// JS ES6 - The Spread Operator (used to break data in an 'array' in single elements)

window.onload = function(){

    var nums1 = [1, 2, 3];
    var nums2 = [...nums1, 4, 5, 6];                                // ... allows for 'nums1' to be displayed as ' 1 2 3' instead of as 'Array [3]'

    console.log(nums2);

}

window.onload = fucntion(){

    var nums = [1, 2, 3];

    function addNums (a,b,c){
        console.log(nums);                                          // without the operator, this will be displayed as an 'arrary'

    }
    
    addNums(...nums);                                               // ... allows for the 'var nums' to be displayed as individual values

}

// Template Strings (takes spacing into account and allows variables to be added into the string)

window.onload = fucntion(){

    function logTest(name, age){
        console.log(`My name is ${name} and my age is ${age}`);      // ${ } - allows for variables to be inserted into the string
    }

    logTest("Luca", 20);                                             // defining the values for the variable 'logTest'

}

// Obejct Literal Improvements

window.onload = fucntion(){

    var one = "Luca";
    var surname = "Liebenberg";

    var goat = {                                                                    // define the values within the variable 'goat'
        one, surname,
        chop(x){
            console.log(`${one} ${surname} you chopped the ninja ${x} times!`);     // use of ` ` so we can insert ${variables} 
        }
    };

    console.log(goat.chop(10));                                                     // define the value of 'chop(x)' in the console.log

}

/* New String Methods:

- repeat      (repeats the string according to the 'number' stated)
- startsWith  (returns back a boelian according to whether the string 'startsWith' what is being checked; can specify a position value)
- endsWith    (returns back a boelian according to whether the string 'endsWith' what is being checked; can specify a position value OR 'string.length - 'position value')
- includes    (checks and validates the 'variable' has the elements that are stated in '.includes' string method) */


console.log(str.repeat(5));                         // .repeat
console.log(startsWith("Hello"));                   // .startsWith
console.log(endsWith("goodbye"));                   // .endsWith
console.log(test1.includes("name"));                // .includes


// Arrow functions 

window.onload = function(){

    var lucaGreeting = name => console.log(`${name} says hello there`);            // 'Arrow function' for 1 line of code

    lucaGreeting("Luca");
}

window.onload + function(){                                                         // 'Arrow function' for executing a function

    var ninja = {
        name: "Luca",
        chop(x){

            window.setInterval()) => {                                              // use of '(()' parenthesis before the use of '=>'

                if(x > 0){
                    console.log(this.name + "chopped the enemy");
                    x--;
                }
            }, 1000;          
        }
    };

    ninja.chop(5);
}

// Sets (new data strcutre in ES6)

window.onload = function(){

    var names = new Set();                                              // 'new Set' allows for unique data to be defined

    names.add("Luca").add("Leah").add("Nell").add("Wayne");             // '.add( )' allows us to add the unique data to the 'variable'


    names.delete("Luca");                                               // 'var.delete(" ")' will delete the selected data element within the 'variable'

    console.log(names.size);                                            // 'var,size' will return the number of data elements present in the variable

    console.log(names);                                                 // 'console.log(names);' will log the 'variable' to the console
}

    names.clear();                                                      // will get rid of all the elements within the specific 'variable'

    console.log(names.has("Leah"));                                     // will check whether the data is present in the 'variable' - will return a boelian


// Sets Example in play:

window.onload = function(){

    var ninjas = ["Luca", "Leah", "Nell", "Wayne", "Nell", "Wayne"];     // define the array 'ninjas'

    var refinedNinjas = new Set(ninjas);                                 // create a 'new Set' with the value of 'ninjas' (will remove all duplicates within the data)
    console.log(refinedNinjas);                                          // console.log the 'new Set'

    ninjas = [...refinedNinjas];                                         // apply the 'new Set' to the variable 'ninjas' by the use of The Spread Opeartor [...]
    console.log(ninjas);                                                 // the 'new Set' will be applied to the variable 'ninjas' in the console.log
}

// Generators (great addition to ES6)

window.onload = function(){

    function* gen(){                                                      // use of the Generator function '*' to get values out of the generator

        yield "pear";                                                     // 'yield' acts as a pause button within the code 
        yield "banana";                                                   // use of '.next' when logging the code to continue
        yield "apple";
        return "all done";                                                // 'return' "all done" so one knows the process has been completed in the console
    }

    var myGen = gen();                                                    // set the iterator (myGen) to = the generator 'gen()'
    console.log(myGen.next());                                            // use of '.next()' acts as next button, allowing the code to continue
    console.log(myGen.next());                                            // '.next' is needed for every 'yield'
    console.log(myGen.next());
    console.log(myGen.next());
}

// Passing values back into the generator

window.onload = function(){

    function* gen(){                                                      

        var x = yield "pear";                                                // the values will be stored within the 'variables'     
        var y = yield "banana";                                                   
        var z = yield "apple";
        return x + y + z;                                                    // returning 'x + y + z' will return the total of the 3 numbers
    }

    var myGen = gen();                                                    
    console.log(myGen.next());                                           
    console.log(myGen.next(10));                                             // 10 will be stored in 'var x'
    console.log(myGen.next(5));                                              // 5 will be stored in 'var y'
    console.log(myGen.next(3));                                              // 3 will be stored in 'var z'
}





// DOM Model tutorial lessons - with code and note examples in logical order of how it would relate to relevant topics


// Document Object Model JS - allows for one to interact with HTMl + CSS elements within the docuemnt 

document.getElementById()                                                     // these are all selectors within the DOM model that allow for one to select and edit elements within the .document 
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()
document.getElementsById()


// DOM - get HTML elements within a document 

my banner = document.querySelector('#page-banner');                              // this will get '#page-banner' and one can edit it as they'd like

my banner = document.querySelectorAll('#book-titles');                           // this will get all the elements relevant to '#book-titles'
                                                                               // one would use this to get more than 1 element within the DOM
my banner = document.querySelector('#banner');
console.log('#banner.innerHTML');
banner.HTML = "this will change to this...";                                   // this will allow for one to change the 'banner' HTML to be edited as desired 

// DOM - Nodes 

const banner = document.querySelector('#banner');

console.log('#banner node type is', banner.nodeType);                          // this will check the 'node type' within the document
console.log('#banner node name is', banner.nodeName);                          // this will check the 'node name' within the document 
console.log('#banner has child nodes', banner.hasChildNodes);                  // this will return as a boelian, whether the 'method' is True/False

const clonedBanner = banner.cloneNode(true);                                   // this will 'clone' the node selected
console.log(clonedBanner);                                                     // will print the 'cloned node' to the console


// DOM Traversal [#1] - from parent to child, and vice versa

const book = document.querySelector('#book');

console.log('the parent node is', book.parentNode);                             // both of these will return the 'parent node' of the selected element
console.log('the parent node is', book.parentElement);

console.log(book.childNodes);                                                   // this will return the 'child nodes' of the element. Linebreaks will be returned as 'text'
console.log(book.children);                                                     // this will return the 'children' elements, without taking the line breaks into consideration 


// DOM Travesal [#2] - from sibling to sibling element 

const bookList = document.querySelector('#book-list');

console.log('the next sibling is:', bookList.nextSibling);                          // this will retrieve the 'next sibling' to the element (line breaks accounted for aas text)
console.log('the next sibling element is:', bookList.nextElementSibling);           // this will do the same, but shall not take line breaks into account

console.log('the previous sibling is:', bookList.previousSibling);                  // this will retrieve the 'previous sibling' to the element 
console.log('the previous sibling element is:', bookList.previousElementSibling);   // this will do the same, but shall not take line breaks into account (as 'text)

bookList.previousElementSibling.querySelector('p') += <br/>'Too cool for school!';  // this will target the 'previousElementSibling' and change the 'p' tag, and add the 'string' undernath the selected element 


// DOM - Events (how to remove content from the DOM)

var h2 = document.querySelector('#book-title');

h2.addEventListener('click', function(event){                                       // this a basic event, with a 'call back function'
    console.log(event.target);                                                      // the 'function parameter' property is targeted ( .target)
    console.log(event);                                                             // the event has been logged to the console to view the event details
});

// DOM Events example - to delete a button that has been clicked on

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(event){

    const li = event.target.parentElement;
    li.parentNode.removeChild(li);

})

// DOM Events #2 example - how to prevent the default behaviour, when clicking onto a link: <a> <a/>

const link = document.querySelector('#page-banner .a');

link.addEventListener('click', function(event){

    event.preventDefault();
    console.log('the navigation to', e.target.textContent, 'was prevented');

})

// Event Bubbling within the DOM - when an 'eventListener' occurs, the event 'bubbles up' to the element above, al the way to the parent element within it
// 'delete books' example (specific button class within a list)

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){                                         // by targeting the parent element ('ul'), any new elements added will still be affected by the 'eventListener'
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});



// Interacting with Forms within the DOM - how to find forms within the document 

// Tutorial code examples follow

document.forms                                                                      // all of these are options in order to get the form from the document 
document.forms[0]
document.forms['add-book']

// how to attach a submit 'eventListner' to a form, and then prevent the 'Default' action and get the value from any input field ('.value' property)

const addForm = document.getForms('add-book');

addForm.eventListener('submit', function(e){                                        // add the eventListener 'submit'
    e.preventDefault();                                                             // prevent Default behaviour from happening (page refreshing)
    const value = addForm.querySelector('input[type = "text"]').value;              // get the 'input[type = "text"]' with the 'querySelector' and use the '.value' property to find the value of the text input
    console.log(value);
});

// Creating Elements within the DOM 


const addForm = document.getForms('add-book');

addForm.eventListener('submit', function(e){                                        // add the eventListener 'submit'
    e.preventDefault();                                                             // prevent Default behaviour from happening (page refreshing)
    const value = addForm.querySelector('input[type = "text"]').value;              // get the 'input[type = "text"]' with the 'querySelector' and use the '.value' property to find the value of the text input

    // create elements 
    const li = document.createElement('li');                                        // will '.createElement' within the DOM
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content 
    deleteBtn.textContent = 'delete';                                               // allows for 'deleteBtn' text content to DELETE
    bookName.textContent = value;                                                   // allows for 'bookName' text content to equal the VALUE in 'input[type = "text"]'.value;



    // append to the document 
    li.appendChild(bookName);                                                       // '.appendChild' will add the const element to the selected parent element within the DOM
    li.appendChild(deleteBtn);
    list.appendChild('li');                                                         // ORDER DOES MATTER, so '.appendChild' elements as the process shall go ('add book, delete book, add the list' - so the process can function)

});

// DOM - Styles & Classes (adding styles & classes to the DOM)

// add styles to the document
var list = document.querySelector('li: last child')                                // declare the element you want to target using '.querySelector'

li.style.color = "red"      // in console                                          // use the '.style' property to add any CSS property to the selected element (.color / .font-size / etc.)
                                                                                   // NOTE: make use of camelCaps as you cannot use hyphen operators within JS like CSS


// add classes to the document
li.className = "new-class"  // in console                                           // use '.className' to edit or add 'className' to the document

// add classes to the document (in editor)
bookName.classList.add('newName');
deleteBtn.classList.delete('newDelete');



// change, check or remove attributes within the DOM

// get & set the attribute (within the console)
var book = document.querySelector("li: first-child");
book.getAttribute('class')                                                          // this will get the attribute class of the element selected
book.setAttribute('class', 'newClass')                                              // this will set the attribute class of the element selected

// check the attribute (within the console: return boelian)
book.hasAttribute('class')                                                          // this will check the attribute class of the element selected (return: True/False)

// remove the attribute (within the console)
book.removeAttribute('class')                                                       // this will remove the attribute class of the element selected



// checkboxes & change events within the DOM

// hide items within a form using a checkbox
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){                                     // '.addEventListner('change') to formulate the change in display/screen
    if(hideBox.checked){                                                            // use of an 'if' statement and '.checked' property, to hide the content selected 'if' selected
        list.style.display = "none";
    } else {                                                                        // 'else' statement used if the checkbox is not selected, then show the content as it should be
        list.style.display = "inital";
    }
});

// Custom Search Filter within the DOM - the 'key of event'
// filter form options 

const searchBar = document.getForms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indeoxOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})



// Object Orientated JavaScript 
/* .Creating our own objects using object literal notation
   .javascript Class es & Constructors 
   .Inheritance
   .Method Chaining
   .Prototypes & Prototype inheritance
*/ 

var userOne = {                                                                     // Object literals
    email: 'aadam@ninjas.com',
    name: 'Aadam',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userTwo = {                                                                     // Object literals
    email: 'luca@ninjas.com',
    name: 'Luca',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userThree = {                                                                     // Object literals
    email: 'james@ninjas.com',
    name: 'James',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};


class User {                                                                         // Class Methods
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){                                                                         // Methods in action (loginin/logout)
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now' , this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User ('luca@ninjas.com', 'Luca');
var userTwo = new User ('luca@ninjas.com', 'Luca');
var userThree = new User ('james@ninjas.com', 'James');
var admin = new Admin('wayne@ninjas.com', 'wayne');

admin.deleteUser(userTwo);

userOne.login().updateScore().updateScore().updateScore().logout();                   // Method chaining 

var users = [userOne, userTwo];

// Constructors (under the hood)

function User(email, name){
    this.email = email;
    this.name = name;
    this.online - false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

// Prototype property

User.property.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.property.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

// New constructor function

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = fucntion(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User ('luca@ninjas.com', 'Luca');
var userTwo = new User ('tim@ninjas.com', 'Tim');
var admin = new Admin('jack@ninjas.com', 'Jack');

var users = [userOne, userTwo, admin];

console.log(admin);


// Asynchronous Javascript
/* 
    HTTP Requests, Status Codes, Callback functions, using JSON data,
    Callback hell, Promises, Chaining Promises, The Fetch API, 
    Async & Await, Throwing Errors 
*/
const getTodos = (resource, callback) => {                                      // callback function used as a parameter
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.staus === 200){            // conditional statements on the data/err callbacks
        const data = JSON.parse( request.repsonseText);                                    // converts the JSON string into JS Objects
        callback(undefined, data);
    } else if(request.readyState === 4){
        callback('could not fetch the data', undefined);
    }
});

request.open('GET', 'todos.json');
request.send();
};


// Promise example below

const getSomething = () => {
    
    return new Promise((resolve, reject ) => {
        // fetch something
        resolve('some data');
        //reject('some error');
    });
}

//    getSomething().then((data) => {
//        console.log(data);
//    }, (err) => {
//        console.log(err);
//    });


getSomething().then(data => {
    console.log(data);
}).catch(err => {                                                                       //.catch works for errors, works like a reject method
    console.log(err);
});


/* getTodos('todos.josn', (err, data) => {                                               // callback function 
    console.log(data);
    getTodos('todosTwo.json', (err, data) => {
        console.log(data);
        getTodos('todosThree.json', (err, data) => {
            console.log(data);
        });
    });
});
*/


// PROMISE inside getTodos

    const getTodos = (resource) => {                                      // callback function used as a parameter

        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.staus === 200){            // conditional statements on the data/err callbacks
            const data = JSON.parse( request.repsonseText);                                    // converts the JSON string into JS Objects
            resolve(data);
        } else if(request.readyState === 4){
            reject('error getting resource');
        }
    });

    request.open('GET', resource);
    request.send();
    });
};

getTodos('todos.json').then((data => {                                    // Chaining Promises together
    console.log('promise resolved:', data);
    return getTodos('todosTwo.json')
}).then((data => {
    console.log('promised 2 resolved:', data)
    return getTodos('todosThree.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});
                                                                           // workspace ENDS here

// The Fetch API 

fetch('toDosThree.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});

// Async & Await

const getTodos = async () => {

   const response = await fetch('todosTwo.json');

   if(response.status !== 200){
       throw new Error('cannot fetch the data');
   }
    const data = await response.json();

    return data;

};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message));                                    // will check for any errors within the json/code/promise

// Procedural way of writing fucntional programming 
// This is a Fucntional Method
// Will capatilise the firstLetter of the variable name
// This is now a pure function 

var names = ['chris', 'seasn', 'raine'];

console.log( names.join(', '));

var capitalizeNames = fucntion(inputNames){
    var outputNames = [];
    for(var i = 0; i < names.length; i++){
        var firstLetter = names[i][0];
        var rest = names[i].slice(1);
        names[i] = firstLetter.toUpperCase() + rest;
    }
        return outputNames;
}

console.log(names.join( capitalizeNames(names).join() );

// Mapping
// Further the logic within the Array
// Logs individual items within an Array, once completed returns undefined values

var capitalNames = names.map(function(item){
    var firstLetter = item[0];
    var rest = item.slice(1);
    return firstLetter.toUpperCase() + rest;
});

console.log( capitalNames );

// 2ND OPTION OF MAPPING THIS PROBLEM
// 1st. Create a function for the problem you need 
// 2nd. Store the function result in a new variable 
// 3rd. Apply the 'Methods' onto the new variable through chain along a serires of values
// 4th. Log the the final result to the console

var capitalizeName = function(name){
    var firstLetter = name[0];
    var rest = name.slice(1);
    return firstLetter.toUpperCase() + rest;
};

console.log( names.map(capitalizeName).join(', ') );

// Filter - takes callback (that decides the final outcome)
// True or False outcome 

var names = ['Chris', 'Sean', 'Joe', 'Stephen'];

console.log(names); 
console.log( names.filter(function(name){
    return name.length > 4;
}) );









//Name: aastha minahs
//Date: 25th jan 2024
//file: list.js
//Description: we are adding 3 new items to the list in the below code.


// get the reference to the HTML list with the id "myList".
let list = document.getElementById("myList");

// adding "Mango" to the end of the list.
// create a new list item element.
let element = document.createElement("li"); 

// create a text node with the content "Mango".
let text = document.createTextNode("Mango"); 

 // append the text node to the list item.
element.appendChild(text);

// append the list item to the end of the list.
list.appendChild(element); 

// adding "Pineapple" to the end of the list.
// create a new list item element.
element = document.createElement("li"); 

// create a text node with the content "Pineapple".
text = document.createTextNode("Pineapple"); 

// append the text node to the list item.
element.appendChild(text); 

// append the list item to the end of the list.
list.appendChild(element); 


// adding "Blueberry" to the start of the list.
 // create a new list item element.
element = document.createElement("li");

 // create a text node with the content "Blueberry".
text = document.createTextNode("Blueberry");

 // append the text node to the list item.
element.appendChild(text);

// obtain the list's first <li> element.
let firstListItem = list.firstChild;

// place the new item in the list before the first item.
list.insertBefore(element, firstListItem);

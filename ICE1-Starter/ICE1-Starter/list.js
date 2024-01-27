//Name: aastha minahs
//Date: 25th jan 2024
//file: list.js
//Description: we are adding 3 new items to the list in the below code.


// Get the reference to the HTML list with the id "theList".
let list = document.getElementById("myList");

// Adding items to the list's end and start.
// Adding "Mango" to the end of the list.
// Create a new list item element.
let element = document.createElement("li"); 
// Create a text node with the content "Mango".
let text = document.createTextNode("Mango"); 
 // Append the text node to the list item.
element.appendChild(text);
// Append the list item to the end of the list.
list.appendChild(element); 

// Adding "Pineapple" to the end of the list.
// Create a new list item element.
element = document.createElement("li"); 
// Create a text node with the content "Pineapple".
text = document.createTextNode("Pineapple"); 
// Append the text node to the list item.
element.appendChild(text); 
// Append the list item to the end of the list.
list.appendChild(element); 

// Adding a new item to the list's beginning.

// Adding "Blueberry" to the start of the list.
 // Create a new list item element.
element = document.createElement("li");
 // Create a text node with the content "Blueberry".
text = document.createTextNode("Blueberry");
 // Append the text node to the list item.
element.appendChild(text);
// Obtain the list's first <li> element.
let firstListItem = list.firstChild;

// Place the new item in the list before the first item.
list.insertBefore(element, firstListItem);

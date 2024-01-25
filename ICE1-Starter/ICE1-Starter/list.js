let list = document.getElementById("theList");

// ADDING ITEMS TO START AND END OF LIST

// Adding "cream" to the end of the list
let element = document.createElement("li");
let text = document.createTextNode("cream");
element.appendChild(text);
list.appendChild(element);

// Adding "spinach" to the end of the list
element = document.createElement("li");
text = document.createTextNode("spinach");
element.appendChild(text);
list.appendChild(element);

// ADD NEW ITEM TO START OF LIST
// Adding "apple" to the start of the list
element = document.createElement("li");
text = document.createTextNode("apple");
element.appendChild(text);

// Get the first <li> element in the list
let firstListItem = list.firstChild;

// Insert the new item before the first item in the list
list.insertBefore(element, firstListItem);

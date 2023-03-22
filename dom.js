// Traversing the DOM
var itemList = document.querySelector('#items');

//parentnode
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes -> take line breaks and stuff
// console.log(itemList.childNodes);

// children -> better than childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild -> also includes line breaks
// console.log(itemList.firstChild);

// firstElementChild 
// console.log(itemList.firstElementChild);

// lastChild and lastElementChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);

// nextSibling && nextElementSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling && previousElementSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

//

// createElement

// Create a div
var newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';   

newDiv.setAttribute('title', 'hello Div');

// create a textnode
var newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);

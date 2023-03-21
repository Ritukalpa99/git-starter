// Get element by Id
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>'
header.style.borderBottom = 'solid 3px #000';

var addItem = document.getElementById('add-item');
addItem.style.fontWeight = 'bold';
addItem.style.color = 'green';
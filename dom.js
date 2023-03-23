var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// add Item
function addItem(e) {
    e.preventDefault();
    
    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // create edit button element
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right edit ml-2';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append edit button to li
    li.appendChild(editBtn);

    // create del button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append del button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    form.reset();
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
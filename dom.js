var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// add Item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById("item").value;
  var newItemDesc = document.getElementById("item-desc").value;
  // create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + newItemDesc));

  // create edit button element
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-info btn-sm float-right edit ml-2";
  // Append text node
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append edit button to li
  li.appendChild(editBtn);

  // create del button element
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append del button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  form.reset();
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  

  // Get list, we get an HTML collections, need to convert it into an array
  var items = itemList.getElementsByTagName("li");

  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemNameTitle = item.firstChild.textContent;
    var itemNameDesc = item.childNodes[1].textContent;

    // console.log(itemNameTitle ,itemNameDesc);
    if (itemNameTitle.toLowerCase().includes(text) || itemNameDesc.toLowerCase().includes(text) ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

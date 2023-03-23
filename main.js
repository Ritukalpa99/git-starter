let form = document.getElementById('my-form');

form.addEventListener('submit', saveDetails);

function saveDetails(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let data = {
        'name' : name,
        'email' : email,
        'phone' : phone,
    };
    let data_serialized = JSON.stringify(data);
    localStorage.setItem(email, data_serialized);

    let display = `${name} ${email} ${phone}`;
    let ul = document.getElementById('users');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(display));
    // Delete button
    let deleteBtn = document.createElement('button');
    
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.onclick = () => {
        localStorage.removeItem(email);
        ul.removeChild(li);
    };

    
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    form.reset();
}

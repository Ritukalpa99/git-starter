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
    let editBtn = document.createElement('button');
    
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.onclick = () => {
        localStorage.removeItem(email);
        ul.removeChild(li);
    };

    editBtn.append(document.createTextNode("Edit"));
    editBtn.onclick = () => {
        let getData = JSON.parse(localStorage.getItem(email));
        let n = document.getElementById('name');
        let e = document.getElementById('email');
        let p = document.getElementById('phone');
        console.log(getData);
        localStorage.removeItem(email);
        ul.removeChild(li);
        n.value = getData.name;
        e.value = getData.email;
        p.value = getData.phone;   
    }
    
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);

    form.reset();
}

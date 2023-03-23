var form = document.getElementById('my-form');

form.addEventListener('submit', saveDetails);

function saveDetails(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // console.log("submit clicked", name, email);
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    let data = {
        'name' : name,
        'email' : email
    };
    let data_serialized = JSON.stringify(data);
    localStorage.setItem('myObj', data_serialized);
    console.log(localStorage.getItem('myObj'));
    alert('Data Saved');
}
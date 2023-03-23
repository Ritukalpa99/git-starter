var form = document.getElementById('my-form');

form.addEventListener('submit', saveDetails);

function saveDetails(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // console.log("submit clicked", name, email);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    alert('Data Saved');
}
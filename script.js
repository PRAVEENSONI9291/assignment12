var form= document.getElementById('form');
form.addEventListener('submit', addToLocalStorageAndPrint);

function addToLocalStorageAndPrint(e){
    e.preventDefault();

    var name1= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('mobile').value;

    var myobj= {
        "name": name1,
        "email": email,
        "phone": phone
    }
    console.log(myobj);

    let myobj_string= JSON.stringify(myobj);
    localStorage.setItem(email,myobj_string);

    let appointments= document.getElementById('appointments');

    var newele= document.createElement('li');
    newele.className= 'list-group-item';
    newele.appendChild(document.createTextNode(`${name1} - ${email} - ${phone}`));

    appointments.appendChild(newele);

    

}
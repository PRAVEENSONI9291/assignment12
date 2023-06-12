var form= document.getElementById('form');
var appointments= document.getElementById('appointments');

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

    


    var newele= document.createElement('li');
    newele.className= 'list-group-item';
    var newele2= document.createElement('span');
    newele2.appendChild(document.createTextNode(`${name1} - ${email} - ${phone}`));
    var newele3= document.createElement('button');
    newele3.id= email;

    newele3.className= 'btn btn-danger btn-sm float-end delete';
    newele3.appendChild(document.createTextNode('X'));

    newele.appendChild(newele2);
    newele.appendChild(newele3);


    
   if(localStorage.getItem(email) !=null)
   {
      alert("This user already exist. If you want to re take the appointment then first delete the earlier appointment and then try again")
   }
   else{
    appointments.appendChild(newele);
    let myobj_string= JSON.stringify(myobj);
    localStorage.setItem(email,myobj_string);
   }
}

     appointments.addEventListener('click', removeList);

     function removeList(e){
        
        
        if(e.target.classList.contains('delete'))
        {
            var list= e.target.parentElement;
            appointments.removeChild(list);
            
            localStorage.removeItem(e.target.id);
            

        }
     }
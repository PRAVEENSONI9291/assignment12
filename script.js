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

    newele3.className= 'btn btn-danger btn-sm float-end delete me-1';
    newele3.appendChild(document.createTextNode('X'));

    var newele4= document.createElement('button');
    

    newele4.className= 'btn btn-success btn-sm float-end edit me-1';
    newele4.appendChild(document.createTextNode('Edit'));

    newele.appendChild(newele2);
    newele.appendChild(newele3);
    newele.appendChild(newele4);




    if(email !="" && name1 !="" && phone !="")
    {
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
   
}

     appointments.addEventListener('click', removeList);
     appointments.addEventListener('click', editList);

     function removeList(e){
        
        
        if(e.target.classList.contains('delete'))
        {
            var list= e.target.parentElement;
            appointments.removeChild(list);
            
            localStorage.removeItem(e.target.id);
            

        }
     }

     function editList(e){
        
        
        if(e.target.classList.contains('edit'))
        {
            var list= e.target.parentElement;
            

            let myobj= JSON.parse(localStorage.getItem(e.target.previousElementSibling.id));
            document.getElementById('name').value= myobj.name;
            document.getElementById('email').value= myobj.email;
            document.getElementById('mobile').value= myobj.phone;
           
            
            localStorage.removeItem(e.target.previousElementSibling.id);
            appointments.removeChild(list);


            // console.log("edit clicked");
            // console.log(e.target.previousElementSibling.id);
            

        }
     }
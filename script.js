document.querySelector(".btn").addEventListener("click",getDetails);
function getDetails(){

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    if(name =="" || password ==""){
        alert("Enter name and password");
    }
    else{
    alert(`Hi ${name}`);
    }

    reset();
    console.log(name.value);

    
}

function reset(){

     document.getElementById("name").value = "";
     document.getElementById("password").value = "";
}
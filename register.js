let fnameerror=document.getElementById("fname-error");
let lnameerror=document.getElementById("lname-error");
let passerror=document.getElementById("pass-error");
let addresserror=document.getElementById("adh");
let phoneerror=document.getElementById("phone-error");
let emailerror=document.getElementById("email-error");
let suberror=document.getElementById("submit-error");
function abdo(){
    let x=document.getElementById("fn").value;
    var m= /^[ a-zA-Z\-/']+$/;
    if(!m.test(x)){
        fnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
        return false;
    }
 if(x.length<3){
        fnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;
    }

    if(x.length == 0){
        fnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
        return false;
    }
  
    else{
        fnameerror.innerHTML=' <i class="fa-solid fa-circle-check"  style="color:green;"></i>';
        return true;
    }

 
}




function ali(){
    let y=document.getElementById("ln").value;
    var n= /^[ a-zA-Z\-/']+$/;
    if(!n.test(y)){
        lnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
        return false;
    }
if(y.length<3){
        lnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;
    } 
     if(y.length == 0){
        lnameerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
        return false;
    }
    else{
    lnameerror.innerHTML=' <i class="fa-solid fa-circle-check" style="color:green;"></i>';
    return true;
}
 
  
  
  
    
}
    function alaa(){

let z= document.getElementById("pn").value;
var p=/^\d{11}$/;
if(!p.test(z)){

    phoneerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;
    


}
if(z.length==0){
phoneerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
return false;

}
if(z.length<11||z.length>11){

    phoneerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;

}
else{
    phoneerror.innerHTML=' <i class="fa-solid fa-circle-check"  style="color:green;"></i>';
    return true;
}


    }
    function aa(){
        let p= document.getElementById("add").value;
        if(p.length==0){
        addresserror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
        return false;
        
        }
        if(p.length<3){
            addresserror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
            return false;
            
            }
        else{
            addresserror.innerHTML=' <i class="fa-solid fa-circle-check"  style="color:green;"></i>';
            return true;
        }

}




    function sayed(){

    let n=document.getElementById("em").value;
    if(n.length==0){
        emailerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red></i>';
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!n.match(mailformat)){
    emailerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;
        

            }
            else{
            emailerror.innerHTML=' <i class="fa-solid fa-circle-check"  style="color:green;"></i>';
            return true;}
        }

        function omar(){
let t=document.getElementById("pw").value;
if(t.length==0){
passerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
return false;}
if(t.length>8||t.length<8){
    passerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
return false;}

var test=/^[A-Z](?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*](?=.*[0-9])[^\s]{1,8}$/;

if(!t.match(/^[A-Z](?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*](?=.*[0-9])[^\s]{1,8}$/)){

    passerror.innerHTML='<i class="fa-solid fa-circle-xmark" style="color:red;"></i>';
    return false;



        }
        else{
            passerror.innerHTML=' <i class="fa-solid fa-circle-check"  style="color:green;"></i>';
            return true;
        }
    }
    function validate(){
if(!alaa()||!abdo()||!sayed()||!omar()||!ali()||!aa()){

suberror.innerHTML="please,verify your inputs";
return false

}
else{
    alert("register successfully");
  
}





    }
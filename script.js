function CheckPassword() 
{ 
    var inputtxt = document.getElementById("password");
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

if(inputtxt.value.match(passw)) 
{ 
// alert('Neat!...(Good Password format)')
return true;
}

else if(inputtxt.value=="")
{
alert('You have given no password');
return false;
}

else
{ 
alert('Wrong Password format.. try another one!')
return false;
}
}


function phonenumber()
{
  var inputtxt = document.getElementById("inputPhone");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno))){
      // alert("phone valid!");
      return true;
        }
        
else if(inputtxt.value=="")
{
alert('You have given no phone number!');
return false;
}
      else
        {
        alert("Wrong phone number format..Try another phone number.");
        return false;
        }
}


function ValidateEmail(inputText)
{
    var inputText = document.getElementById("inputEmail4");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");

return true;
}

else if(inputText.value=="")
{
alert('You have given no Email id');
return false;
}
else
{
alert("You have entered an invalid email address!");

return false;
}
}

// function myfunction(show)
// {
//   show.classList.add('fa-eye-slash');
// }

// function toggle1()
// {
//   let state=false;
//   let password=document.getElementById('password');
//   if(state){
//     password.setAttribute("type","password");

//     state=false;}
//   else
//   {
//       password.setAttribute("type","text");
//     state=true;

//     }
//   }

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function checkstrenght(){
console.log('hello');
let password=document.getElementById('password');
let psswordStrength=document.getElementById('password-strength');
let lowerUpperCase=document.querySelector('.fas1');
let number=document.querySelector('.fas2');
let specialChar= document.querySelector('.fas3');
let eightChar=document.querySelector('.fas4');
console.log(lowerUpperCase);
password.addEventListener('keyup',function(){
  let pass=password.value;
  CheckStrenght(pass);

})
 function CheckStrenght(pass){
   let str=0;
   if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
      {
        str +=1;
        lowerUpperCase.classList.remove('fa-circle');
        lowerUpperCase.classList.add('fa-check');
      
        }
        else{
          lowerUpperCase.classList.remove('fa-check');
        lowerUpperCase.classList.add('fa-circle');
        }
     console.log(lowerUpperCase.classList);



    if(pass.match(/([0-9])/))
    {
      str +=1;
      number.classList.remove('fa-circle');
      number.classList.add('fa-check');
   
     }
     else{
       number.classList.remove('fa-check');
      number.classList.add('fa-circle');
     }
    //  console.log(str);
 


 if(pass.match(/([@,#,$,%,^,&,*,_,-,+,=,!])/))
 {
   str +=1;
   specialChar.classList.remove('fa-circle');
   specialChar.classList.add('fa-check');

  }
  else{
    specialChar.classList.remove('fa-check');
    specialChar.classList.add('fa-circle');
  }
  console.log(str);
  if(pass.length>7){
    str+=1;
    eightChar.classList.remove('fa-circle')
    eightChar.classList.add('fa-check');

  }
  else{
    eightChar.classList.remove('fa-check');
    eightChar.classList.add('fa-circle');
  }
  
  if (str==0){
    psswordStrength.style='width:0%';

  }
  else if(str==1){
    psswordStrength.classList.remove('progress-bar-warning');
    psswordStrength.classList.remove('progress-bar-success');
    psswordStrength.classList.add('progress-bar-danger');
    psswordStrength.style='width:20%';

  }
  else if(str==3){
    psswordStrength.classList.remove('progress-bar-danger');
    psswordStrength.classList.remove('progress-bar-success');
    psswordStrength.classList.add('progress-bar-warning');
    psswordStrength.style='width:70%';
    
  }
  else if(str==4){
    psswordStrength.classList.remove('progress-bar-danger');
    psswordStrength.classList.remove('progress-bar-warning');
    psswordStrength.classList.add('progress-bar-success');
    psswordStrength.style='width:100%';
    
  }
}
}






/* <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 70%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-danger" role="progressbar" style="width: 33%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-warning" role="progressbar" style="width: 66%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
<br> */
const loginsubmit=document.querySelector('.submitbtn');
loginsubmit.addEventListener("click",submit);
const loginformdisplay=document.querySelector('.login');
loginformdisplay.addEventListener("click",loginformdisplayf);
function loginformdisplayf()
{
    document.querySelector('.section').style.display="inline-block";
    document.querySelector('.login1').style.display="none";

    document.querySelector('.welcomemsg').style.display="none";
    
}
const closelogin=document.querySelector('.Xmark');
closelogin.addEventListener("click",closeloginf);
function closeloginf()
{
    document.querySelector('.section').style.display="none";
    document.querySelector('.login1').style.display="block";
}

function submit()
{
    document.querySelector("#checkbox").checked=false;
    const password =document.querySelector('#password').value;
    const email1 =document.querySelector('#email').value;
    if((isValidEmail(email1)) && !(isValidPassword(password)))
    {
        document.querySelector('#emailwarning').innerHTML="";
    }
    if(!(isValidEmail(email1)) && (isValidPassword(password)))
    {
        document.querySelector('#passwordwarning').innerHTML="";
    }
    if((isValidEmail(email1)) && (isValidPassword(password)))
    {
        document.querySelector('#password').value="";
        document.querySelector('#email').value="";
        document.querySelector('#emailwarning').innerHTML="";
        document.querySelector('#passwordwarning').innerHTML="";
        window.location.href="search.html";
        
        return true;
    }
    return false;
    
}
function isValidEmail(email1s)
{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@.]+$/;
    const emailwarning=document.querySelector('#emailwarning');
    if(email1s === "" || email1s==null)
    {
        emailwarning.innerHTML="Email must be filled out";
        return false;
    }
    if(!regex.test(email1s))
    {
        emailwarning.innerHTML="Enter an valid email address";
        return false;
    }
    return true;
}
function isValidPassword(passwords){
    const minlength=8;
    const hasuppercase=/[A-Z]/.test(passwords);
    const haslowercase=/[a-z]/.test(passwords);
    const hasnumbers=/[0-9]/.test(passwords);
    const hasspecialcharacters=/[@!#$&]/.test(passwords);
    const passwordwarning=document.querySelector('#passwordwarning');

    if(passwords === "" || passwords==null)
    {
        passwordwarning.innerHTML="password must be filled out";
        return false;
    }
    if(!(passwords.length>=8))
    {
        passwordwarning.innerHTML="password must consist of 8 characters";
        return false;
    }
    if(!hasuppercase)
    {
        passwordwarning.innerHTML="password must contains uppercase";
        return false;
    }
    if(!haslowercase)
    {
        passwordwarning.innerHTML="password must contains lowercase";
        return false;
    }
    if(!hasnumbers)
    {
        passwordwarning.innerHTML="password must contains numbers";
        return false;
    }
    if(!hasspecialcharacters)
    {
        passwordwarning.innerHTML="password must contains special characters";
        return false;
    }
    return true;
}


/*function myfunction()
{
    if(isValidPassword(password))
    {
        document.querySelector('#password').value="";
        document.querySelector("#passwordwarning").style.display="none";
    }
    else{
        document.querySelector("#passwordwarning").style.display="block";
        document.querySelector("#passwordwarning").innerHTML="Enter the valid password";
        document.querySelector("#passwordwarning").style.color="red";
        document.querySelector('#password').value="";

    }
    if (isValidEmail(email1)) 
    {
        document.querySelector("#email").value="";
        document.querySelector("#emailwarning").style.display="none";
    } 
    else 
    {
        document.querySelector("#emailwarning").style.display="block";
        document.querySelector("#emailwarning").innerHTML="Enter valid email address";
        document.querySelector("#emailwarning").style.color="red";
        document.querySelector("#email").value="";
    }
    if(email1.value=null)
    {
        document.querySelector("#emailwarning").innerHTML="Enter must be filled out";
    }
}*/


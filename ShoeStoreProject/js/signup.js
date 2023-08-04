var inputTags=document.querySelectorAll("input")
var selectTags=document.querySelectorAll("select")
console.log(inputTags)
function storeData(){
var fname= inputTags[0].value
var sName=inputTags[1].value

var MandE=inputTags[2].value
var pass=inputTags[3].value
var dd=selectTags[0].value
var mo=selectTags[1].value
var yy=selectTags[2].value
localStorage.setItem("Firstname",fname)
localStorage.setItem("SecondName",sName)
localStorage.setItem("MoAndEmail",MandE)
localStorage.setItem("password",pass)
localStorage.setItem("date",dd)
localStorage.setItem("month",mo)
localStorage.setItem("year",yy)
 

}
function genderSel(gen)
{
    var gender=gen;
    localStorage.setItem("gender",gender)

}
function data(){
    var poss= localStorage.getItem("password")
    var pass1=document.getElementById("pswd").value
    localStorage.setItem("pass", pass1)

     
     
     if (poss==pass1)
     {
        document.getElementById("msg").innerHTML="valid password"
        document.getElementById("msg"). style.color="green"

     }
      
     else{
        document.getElementById("msg").innerHTML="invalid password"
        document.getElementById("msg"). style.color="red"

     }
    
     var num=localStorage.getItem("MoAndEmail")
     var num1=document.getElementById("email").value
     localStorage.setItem("psw",num1)
     if ( num==num1)
     {
        document.getElementById("emsg").innerHTML="valid email"
        document.getElementById("emsg"). style.color="green"

     }
     
     else{
        document.getElementById("emsg").innerHTML="invalid email"
        document.getElementById("emsg"). style.color="red"
         

     }
      
}


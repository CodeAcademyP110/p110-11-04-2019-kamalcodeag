"use strict";


//Name

let inputName = document.querySelector(".name");

inputName.onkeydown = function(e)
{
    if(e.keyCode === 13)
    {
        
        let inputNameValue = inputName.value.trim();

        if(!isNaN(inputNameValue))
        {
           
            alert("Please add a valid name");
            inputName.value = "";
        }
        else
        {
            if(inputNameValue.length >= 3)
            {
                // console.log("ok");
                inputName.value = "";
            }
            else
            {
                // console.log("bad");
                let nameError = document.createElement("p");
                nameError.innerHTML = "Error";
                let pName = document.querySelector(".p-name");
                pName.appendChild(nameError);
                inputName.value = "";
            }
        }
    }
}

//Surname

let inputSurname = document.querySelector(".surname");

inputSurname.onkeydown = function(e)
{
    if(e.keyCode === 13)
    {
        
        let inputSurnameValue = inputSurname.value.trim();

        if(!isNaN(inputSurnameValue))
        {
           
            alert("Please add a valid surname");
            inputSurname.value = "";
        }
        else
        {
            if(inputSurnameValue.length >= 3)
            {
                // console.log("ok");
                inputSurname.value = "";
            }
            else
            {
                // console.log("bad");
                let surNameError = document.createElement("p");
                surNameError.innerHTML = "Error";
                let pSurName = document.querySelector(".p-surname");
                pSurName.appendChild(surNameError);
                inputSurname.value = "";
            }
        }
    }
}


//Email

let email = document.querySelector(".email");

email.onkeydown = function(e)
{
    if(e.keyCode === 13)
    {
        let inputEmailValue = email.value.trim();
        
        if(inputEmailValue.indexOf("@") !== -1 && inputEmailValue.indexOf(".") !== -1)
        {
            email.value = "";
        }
        else
        {
            let emailError = document.createElement("p");
            emailError.innerHTML = "Error";
            let pEmail = document.querySelector(".p-email");
            pEmail.appendChild(emailError);
            email.value = "";
        }
    }
}


//Password

let password = document.querySelector(".password");

password.onkeydown = function(e)
{
    if(e.keyCode === 13)
    {
        let passwordValue = password.value.trim();
    
        if(passwordValue.length >= 8 && isNaN(passwordValue) && passwordValue.indexOf("@","!","#","_") !== -1)
        {
            password.value = "";
        }
        else
        {
            let passwordError = document.createElement("p");
            passwordError.innerHTML = "Error";
            let pPassword = document.querySelector(".p-password");
            pPassword.appendChild(passwordError);
            password.value = "";
        }
    }
}    




// let password = document.querySelector(".password");

// password.onkeydown = function(e)
// {
//     if(e.keyCode === 13)
//     {
//         let passwordValue = password.value.trim();
    
//         if(passwordValue.length >= 8 && passwordValue.indexOf("@","!","#","_") !== -1)
//         {
//             if(isNaN(passwordValue) && passwordValue.indexOf("0","1","2","3","4","5","6","7","8","9") !== -1)
//             {
//                 password.value = "";
//             }
//             else
//             {
//                 let passwordError = document.createElement("p");
//                 passwordError.innerHTML = "Error";
//                 let pPassword = document.querySelector(".p-password");
//                 pPassword.appendChild(passwordError);
//                 password.value = "";
//             }     
//         }
//     }
// }



// let password = document.querySelector(".password");

// password.onkeydown = function(e)
// {
//     if(e.keyCode === 13)
//     {
//         let passwordValue = password.value.trim();
    
//         if(passwordValue.length >= 8)
//         {
//             if(isNaN(passwordValue))
//             {
//                 if(passwordValue.indexOf("0","1","2","3","4","5","6","7","8","9") !== -1)
//                 {
//                     if(passwordValue.indexOf("@","!","#","_") !== -1)
//                     {
//                         password.value = "";
//                     }
//                     else
//                     {
//                         let passwordError = document.createElement("p");
//                         passwordError.innerHTML = "Error";
//                         let pPassword = document.querySelector(".p-password");
//                         pPassword.appendChild(passwordError);
//                         password.value = "";
//                     }
//                 }
//             } 
//         }
//     }
// }



// let password = document.querySelector(".password");

// password.onkeydown = function(e)
// {
//     if(e.keyCode === 13)
//     {
//         let passwordValue = password.value.trim();
    
//         if(passwordValue.length >= 8)
//         {
                
        
//             if(isNaN(passwordValue))
//             {
//                 let numbers = ["0","1","2","3","4","5","6","7","8","9"];

//                 for(let i=0; i<numbers.length; i++)
//                 {
//                     if(passwordValue.indexOf("@","!","#","_") !== -1 && passwordValue.indexOf(numbers[i]) !== -1)
//                     {
//                         console.log(passwordValue);
//                     }
//                 }
//             }

 
//         }
//         else
//         {
//             let passwordError = document.createElement("p");
//             passwordError.innerHTML = "Error";
//             let pPassword = document.querySelector(".p-password");
//             pPassword.appendChild(passwordError);
//             password.value = "";
//         }
//     }
// }





// Testing

// let string = "0123abc@";


// let changeToArray = string.split("");

// let number = changeToArray.indexOf("0") !== -1;
// let letter = changeToArray.indexOf("a") !== -1;
// let symbol = changeToArray.indexOf("@") !== -1;

// console.log(changeToArray,number,letter,symbol);



// if(passwordValue.length >= 8)
// {
//     for(let i=0; i<=passwordValue.length; i++)
//     {
//         console.log(isNaN(passwordValue[i]));
//     }   
    
// }





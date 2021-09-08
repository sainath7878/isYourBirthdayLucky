const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector(".btn-check");
const resultText = document.querySelector(".result");

function sum(date) {
    var castedDateOfBirth = Number(date.replaceAll("-", ""));
    var sum = 0;
    while (castedDateOfBirth > 0) {
        var rem = castedDateOfBirth % 10;
        sum = sum + rem;
        castedDateOfBirth = Math.trunc(castedDateOfBirth/10);
    }
    return sum;
}

function checkDateOfBirthIsLucky(){
    if(dateOfBirth.value && luckyNumber.value){
        if(Number(luckyNumber.value > 0)){
            var sumOfDigits = sum(dateOfBirth.value);
            if(sumOfDigits % Number(luckyNumber.value) === 0){
                resultText.innerText = "Yaaayy! Your Date of Birth is  Lucky"; 
            }
            else{
                resultText.innerText = "Oops! Your Date of Birth is Not Lucky"; 
            }
        }
        else{
            resultText.innerText = "Lucky Number must be a postive value."; 
        }
        
    }
    else{
        resultText.innerText = "Please fill both the fields"; 
    }
}

btnCheck.addEventListener("click", checkDateOfBirthIsLucky)
//------------------------------------------------JavaScript File ---------------------------------------------------------------------------//
// Handle Slider Control and Display Password Length 
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const inputSlider = document.querySelector("[data-lengthSlider]");

const generateBtn = document.querySelector(".generateButton");

let password = "";
let passwordLength = 10;
// set strength circle to grey

// function for set the password length

//handleSlider WORK -> it reflects the password length in the UI
const handleSlider = ()=>{
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength-min)*100/(max-min)) + "% 100%";
};
handleSlider();


// Strength color based on password
const indicator = document.querySelector("[data-indicator]");

// set indicator

//WORK --> It Set the input parameter in the strength section
const setIndicator = (color)=>{
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
};
// default indicator
setIndicator("#ccc");

// ------------------------------------------------------------------------------------------------------------------------------------//

// Generate Random Letters and Number and Symbols


const getRndInteger =(min, max)=>{
    return Math.floor(Math.random() * (max-min)) + min;
};

// Random Number
const generateRandomNumber = ()=>{
    return getRndInteger(0,9);
};

// Random LowerCase Letter 
const generateLowerCase =()=>{
    return String.fromCharCode(getRndInteger(97, 123));
};

// Random UpperCase letter
const generateUperCase =()=>{
    return String.fromCharCode(getRndInteger(65, 91));
};

// Symbols for generating  
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// Generate Symbols
const generateRandomSymbol = ()=>{
    const index = getRndInteger(0, symbols.length);
    return symbols[index];
};

// ----------------- for Letters and Number and Symbols---------------------//
const uppercaseCheck = document.querySelector("#upperCase");
const lowercaseCheck = document.querySelector("#lowerCase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");

const calcStrength = ()=>{
     let hasUpper = false;
     let hasLower = false;
     let hasNumber = false;
     let hasSymbol = false;

     if(hasUpper && hasLower &&(hasNumber || hasSymbol) && passwordDisplay>=8){
        setIndicator("#0f0");
     }
     else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
     }
     else{
        setIndicator("#f00");
     }
};

// -----------------------------------------------------------------------------------------------------------------------------------//

// ------------ Copy Content-------------//
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");


// function for copy message
const copyContent = async()=>{
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied!";
    }
    catch(e){
        copyMsg.innerText = "Failed!!";
    }
  
    // to visible the copy msg
    copyMsg.classList.add("active");
 
    // removed copied msg after 2sec
    setTimeout( ()=>{
        copyMsg.classList.remove("active");
    }, 2000);
};

//---------------------------------------------------------------------------------------------------------------------------------------//
//---------Function for Passwword Suffle -----------//

// Suffle algorith --> Fisher-Yates
// For Shuffle the array randomly --> Fisher Yates Method
function sufflePassword(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) =>{str += el});
    return str;
}



//-----------------CheckBoxes ----------------------//
const allcheckBox = document.querySelectorAll("input[type=checkbox]");

let checkCount = 0;
const handleCheckBoxChange = ()=>{
    checkCount = 0;
    allcheckBox.forEach((checkbox) =>{
        if(checkbox.checked){
            checkCount++;
        }
    });

  //  Special Condition
  if(passwordLength < checkCount){
    passwordLength = checkCount;
    handleSlider();
  }
};

allcheckBox.forEach((checkbox) =>{
    checkbox.addEventListener('change', handleCheckBoxChange)
})


//----------------- Input Sliderr----------------------//
inputSlider.addEventListener('input',(e) =>{
    passwordLength = e.target.value;
    handleSlider();
})
   
copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
});


// ------------------------------------------------------------------------------------------------------------------------------------- //
//----------------Generate Password-------------------//

generateBtn.addEventListener('click', ()=>{
   // none of the checkbox are selected
    if(checkCount <=0) {
        return;
    }
    if(passwordLength <=checkCount){
        passwordLength = checkCount;
        handleSlider();
    }


    // from here  we write the code for new password
    console.log("Starting the password section");
    //remove the previous password
    password="";

    // from here we put the stuff which is mentioned by checkbox

    // if(uppercaseCheck.checked){
    //     password += generateUperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password += generateRandomSymbol();
    // }

    let funArr = [];
    if(uppercaseCheck.checked){
        funArr.push(generateUperCase);
    }  

    if(lowercaseCheck.checked){
        funArr.push(generateLowerCase);
    }
    
    if(numbersCheck.checked){
        funArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked){
        funArr.push(generateRandomSymbol);
    }


    // Compulsory addition

    for(let i=0;i<funArr.length;i++){
        password += funArr[i]();
    }
    console.log("compulsory addition done");

    // Remaining Addition
    for(let i=0;i<passwordLength-funArr.length; i++){
        let randIndex = getRndInteger(0, funArr.length);
        password += funArr[randIndex]();
    }

    console.log("removing addition done");
    // for suffle the password
    password = sufflePassword(Array.from(password));
    console.log("Suffling  done");
    // for Show to UI
    passwordDisplay.value = password;
    console.log("Ui addition done");

    // Calculate strength
    calcStrength();
});
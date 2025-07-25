const display = document.querySelector(".display"); 

const buttons = document.querySelectorAll("button"); 

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
          //alert("btnValue :"+btnValue);
          //display.focus();
          if (btnValue == "=" && output != "") {
            
            output = eval(output);
          } else if (btnValue === "AC") {
            output = "";
          } else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1); 
          } else {
           
            if (output == "" && specialChars.includes(btnValue)) 
              return;
            output += btnValue; // appends btn value to diaplsy
          }
          //alert("Output :"+output);
          display.value = output;
          
};

buttons.forEach((button) => {
  
  button.addEventListener("click", (e) => calculate(e.target.dataset.value)
);
  
});
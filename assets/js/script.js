 function calculate() {
     let num1 = parseInt(document.getElementById("first number").value);
     let num2 = parseInt(document.getElementById("second number").value);
     let operator = document.getElementById("operator").value;
     let answer = 0; 

     if (!isNaN(num1) && !isNaN(num2)) {
     switch(operator) {
         case "+": answer = num1 + num2; break;
         case "-": answer = num1 - num2; break;
         case "*": answer = num1 * num2; break;
         case "/": answer = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
         default:
     }
     document.getElementById("answer").style.color = "green";
             } else {
                 answer = "Enter valid numbers";
                 document.getElementById("answer").style.color = "red";
             }
    
     document.getElementById("answer").textContent = answer;
 }

 function clearFields() {
    document.getElementById("first number").value = "";
    document.getElementById("second number").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("answer").textContent = "0";
    document.getElementById("answer").style.color = "black";
}


// function calculate(){
//     let num1 = parseFloat(document.getElementById("first number").value);
//     let num2 = parseFloat(document.getElementById("second number").value);
//     let operator = document.getElementById("operator").value;
//     let output = document.getElementById("answer");

//     if (!isNaN(num1) && !isNaN(num2)) {
//     if (operator === "+"){
//         answer = num1 + num2

//     }else if (operator === "-"){
//         answer = num1 - num2 

//     }else if (operator === "*"){
//         answer = num1 * num2 

//     }else if (operator === "/"){
//         answer = num1 / num2 
//     }
//     document.getElementById("answer").style.color = "green";
//             } else {
//                 answer = "Enter valid numbers";
//                 document.getElementById("answer").style.color = "red";
//             }
//             output.innerHTML = answer;


//             function clearFields() {
//                 document.getElementById("num1").value = "";
//                 document.getElementById("num2").value = "";
//                 document.getElementById("operator").value = "+";
//                 document.getElementById("answer").innerHTML = "0";
//                 document.getElementById("answer").style.color = "black";
//             }
// }
let a = 5;
let b = 6;

let choice = prompt("ADD, SUB, MULTIPLICATION , DIVISON");
let result;
console.log(choice);

switch (choice){
    case 1:
        result= a+b; break;
    case 2:
        result= a-b; break;
    case 3:
        result= a*b; break;
    case 4:
        result= a/b; 
}
console.log(result);
console.log("hellooo");

// let age = 9;

/* if (age>=10 && age<=20) {
    console.log("yeah");
}
else{
    console.log("FUCK");
} */



/* for (let i = 0; i <=3; i++) {
    let choice = i;
    switch (choice) {
        case 1:
            console.log("ohhooo"); break;
        case 2:
            console.log("hooooo");break;
        case 3:
            console.log("hhuhuhu");break;
    }
} */



/* let obj = {
    harry:98,
    rohan:70,
    aakash:75,
}
for (const i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
        const element = obj[i];
        console.log(element)
    }
} */




/* let arr =[1,2,3,4]
for (const i of arr) {
    console.log(arr[i])
}
for (const i of arr) {
    console.log(i)
} */




/* let arr=[1,2,3,4,5,6]
function mean(arr){
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element;
        console.log(sum);
    }
    let mean=sum/arr.length;
    console.log(mean);
}
mean(arr) */




/* let name ="Ashutosh vats";
console.log(name.includes('As'));
console.log(name.includes('As',9)); */




/* let name ="Ashutosh vats";
console.log(name.toLowerCase()) */




/* let ran="Please give me 1000"
console.log(ran.slice(15)); */



/* let name ="Ashutosh vats"
console.log(name.replace("Ashu","damru")) */




/* let arr = [];
let input;

do {
    input = parseInt(prompt("Enter input")); 
    arr.push(input);
} while (input !== 0);

console.log(arr); */



/* let arr=[];
let i=0;
let ele

do{
    arr[i]=parseInt(prompt("Enter input"));
    ele= arr[i];
    i++
}while(ele!=0);

console.log(arr) */



/* 
function factorial(value1,value2){
    return value1*value2
}
let arr=[1,2,3,4,5]

let result=arr.reduce(factorial)
console.log(result) */

const array = Array.from({ length: n });
const arr=array.map(( valueindex)=>{
    return index+1
})

console.log(arr)


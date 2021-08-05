// // printing 1 to 100 
// console.log('Printing all the numbers 1 to 100 using for loop');
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// //printing 1 to 100  by using while loop
// console.log('Printing all the numbers 1 to 100 using while loop');
// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// odd numbers between 50 to 80
// for (let i = 50; i <= 80; i++){
//     if(i%2 !=0){
//         console.log(i);
//     }
// }

//odd numbers between 50 to 80 using while loop
// let i=50;
// while(i<=80){
//     if(i%2 != 0){
//         console.log(i);
//     }
//     i++;
// }

//add three numbers in a function

function addThreeNumbers(number1,number2,number3)
{
    let totalSum= number1+number2+number3;
    return totalSum;
}
let numbers = addThreeNumbers(33,75,80);
console.log('Total Addition is: ' , numbers);

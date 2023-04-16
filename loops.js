// Write a function that accepts an array of strings and console.logs each element using a for loop.

function names(arrNames){
    for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}
}
let arrNames = ["Nina","Alvin","Monica","Amani","Imani"];
names(arrNames);

// Please use a for loop to print out the classic chorus lyrics of "I'm Blue" by Eiffel 65. 
//  Use a for loop to print out the string 
// "Da ba dee da ba daa" exactly 6 times.  No more, and no less.

    for(let i = 1; i <= 6; i++ ){
        console.log("Da ba dee da ba daa");
    }

    // Write a function that takes in an array of numbers and consoles the 
    // first four items multiplied by 8 
    // and the last two added by 5. Console the array with the new values

    function arrNums(nums){
        for(let i = 0; i < nums.length; i++){
            if(i < 4){
                nums[i]*=8
            }
            else if(i>=nums.length-2){
                nums[i]+=5
               }
           }
           console.log(nums);
       }    
       let nums= [4,5,11,30,8,6];
       arrNums(nums)
        
// make a loop that prints out even numbers from  0 to 20
for(let i = 0; i<=20;  i +=2 ){
    console.log(i);
     
}
// WHILE LOOP
let count = 0;
while(count < 10){
    count++;
    console.log(count );
}

// const secret = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while(guess == secret){
//     guess = prompt("enter the secret code...")
// }
// console.log("Congrats You Got The Secret");

// Write a function that takes in the following array and 
//use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];


function number(arr3){
    let i = 0;   
    while(i<arr3.length){
        console.log(arr3[i]);
        
        if(i === 4){
            break;
        }
        i++;
        
    }
    
}
let arr3= [1,2,3,4,5,6,7,8,9];
number(arr3)   
    

// let targetNum = Math.floor(Math.random()* 10);
// let guess = Math.floor(Math.random() * 10);

// while(true){
//     guess == Math.floor(Math.random() * 10);
//     if (guess === targetNum){
//         console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
//         break;
//     }
//     else{
//         console.log(`Guessed ${guess}...Incorrect!`);
//     }
// }

// forEach
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function numbs(numbers){ 
    numbers.forEach(numbers => {
        numbers*=2
        console.log(numbers);
    });
}
let numbers = [4,5,11,30,8,6];
numbs(numbers)

console.log("Honza")
console.log("\nStart")

// 4.1: CONDITIONS

// 4.1a:

let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

// 4.1b:

let a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

// 4.2: LOOPS

let count, i;

// 4.2a:

count = 10;
console.log(`\nPrints numbers between 0 and ${count-1}:`);

for (i = 0; i < count; i++) {
    console.log(i);
}

// 4.2b:

console.log(`\nPrints numbers between 1 and ${count}:`)
for (i = 1; i <=10; i++) {
    console.log(i);
}

// 4.3c:

count = 20;

console.log(`\nPrints even numbers between 0 and ${count}:`)


for (i = 0; i <= count; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
};


// FUNCTIONS

// Excercise 1: Create a function which print the first N numbers.

let printNumbersTill = (N) => {
    for (i = 1; i <= N; i++) {
        console.log(i);
    }
}

console.log("\nVypíše čísla do 15:")

printNumbersTill(15);

console.log("\nVypíše čísla do 20:")

printNumbersTill(20);

// Excercise 2: Create a function which gets a name as parameter 
// and then returns a greeting to the specified person.

console.log("\nFunkce vracející pozdrav:")

let getGreetingTo = (personName) => {
    return "Hello, " + personName + "!";
};

console.log(getGreetingTo("inhabitants of Earth"));


// FOR LOOPS AND ARRAYS

// Excercise 1: Create a function which gets an array as parameter and prints each value from it.

let myValues = [0, 3, 6, 9]

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

console.log("\nVytiskne hodnoty ", myValues, " pomocí cyklu for:")

  printValues(myValues);


// Excercise 2: Change your previous printValues function to use forEach loop.

printValues = (array) => {
    array.forEach(element => {
        console.log(element);
    });
}

console.log("\nVytiskne hodnoty ", myValues, " pomocí metody forEach:")

printValues(myValues);

// //////////////////////////////////////////////////////////////////////////

// 


console.log("\nEnd")
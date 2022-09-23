const readline = require("readline-sync");
const name = readline.question("What is your name?");

const game = readline.question(`Hello ${name} welcome to the Escape Room here are the options.
a. Place your hand in the hole
b. Open the door
c. Or Look for the key
Choose One !`);

const foundKey = readline.question("You found the key. Type 'Open' to open the door")

if (game === 'a'){
    console.log("You put your hand in the hole and got bit by a 'Black Mamba' your DEAD !!!");
} else if ( game === 'b'){
    console.log("Door looked you don't have the key")
} else if ( game === 'c'){
    console.log(foundKey)
} else if (foundKey === 'Open'){
    console.log("Congrats you escaped !!!")
};

    



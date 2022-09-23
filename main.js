const readline = require("readline-sync");
const name = readline.question("What is your name?");

const userAnswers = ['Yes','NO']
const options = ["Put hand in hole","Find the key, or","Open the door"]
const theKey = ["Look under the rug", "Look under the bed","Put hand in hole"]
const nopeNotThere = [" Sorry the key is not there", "Yes !!! You found the key"]

const playGame = readline.keyInSelect(userAnswers, `${name} do you want to play the Escape Room Game ? `)
const yes = readline.keyInSelect(options, `${name}, here are your options`)
const no = "OK maybe next time"
const findKey = readline.keyInSelect(theKey, `What do you want to choose ${name}`)
const underRug = readline.keyInSelect( options," Sorry the key is not there.Here are your options")

const youLose = "You put your hand in the hole and got bit by a 'Black Mamba' your DEAD !!!"


if ( name === ""){
    console.log(playGame)
} else if (playGame === '1'){
    console.log(yes)
} else if (playGame === '2'){
    console.log(no)
} else if (yes === 0){
    console.log(youLose)
} else if ( yes === 1){
    console.log(findKey)
} else if ( findKey === 0){
    console.log()
}

// Import the 'inquirer' module, which is a command line interface for Node.js 
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter your sentence for word counting.'
    }
]);
const word = answers.sentence.trim().split(" ");
console.log(word);
let wordLength = word.length;
console.log(`Your sentence word count is:${wordLength}`);

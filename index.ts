#!/usr/bin/env node
// This line is called a shebang,it tells the operating system to run it with nodejs

// Import the 'inquirer' module, which is a command line interface for Node.js 
import inquirer from "inquirer";

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers :{ sentence : string } = await inquirer.prompt([
    {
        name:'sentence',
        type:'input',
        message:'Enter your sentence for word counting.'
    }
])

const word = answers.sentence.trim().split(" ")
console.log(word);
let wordLength = word.length
console.log(`Your sentence word count is:${wordLength}`)
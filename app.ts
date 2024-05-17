#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Creating a design
console.log(chalk.bold.cyanBright("\n \t Welcome to __Arisha Ghaffar's__ Word Counter"));
let answers = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence",
    }
]);

//counting words

let words = answers.sentence.trim().split(" ");

console.log(chalk.bold.cyanBright("\n \t Words in a Sentence:"));
console.log(words);
console.log(chalk.bold(`\n -Words Count: ${chalk.bold.redBright(words.length)}`));




#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let mypin = 1234;
console.log("=".repeat(60));
console.log(chalk.yellow("\t Wellcome to code with Fatima ATM_Machine"));
console.log("=".repeat(60));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code : "
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin is correct, login Successfully");
    console.log(`Current Amount Balance is ${myBalance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Cheak Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter a amount to withdraw : "
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}Withdraw Successfully`);
            console.log(chalk.greenBright(`\n \t Your remaining balance is : ${myBalance}\n`));
        }
    }
    else if (operationAnswer.operation === "Cheak Balance") {
        console.log(`Your Account Balance is:${myBalance}`);
    }
}
else {
    console.log(chalk.red("\n \tPin is Incorrect, Try Again!!\n"));
}

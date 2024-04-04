#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

import Choices from "inquirer/lib/objects/choices.js";


let myBalanace = 49000
let myPin = 1999;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter  your pin",
            type:"number",
           
        }]
        )
        

        if (pinAnswer.pin===myPin) {
        console.log((chalk.bgGreenBright.bold)("correct pin code!!!"));

        let operationAns =await inquirer.prompt(
            [
                {
                  name:"operation",
                  message:"please select your option",
                  type:"list",
                  choices:["withdraw","check balance","fastcash"]
                }
            ]
        )
            //if user select withdraw
        if (operationAns.operation ==="withdraw"){
          let amountAns =await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
          );
          if(amountAns.amount<=myBalanace){
            let balance = myBalanace -= amountAns.amount

            console.log( (chalk.yellow.bold)("your ramaining balance is" + myBalanace));
          };
        
        } 
    //if user select check balance
            else if (operationAns.operation ==="check balance"){

            console.log((chalk.blue.bold.bgWhite)("your balance is ")+ myBalanace);
        }
        //if user select fastcash
         if (operationAns.operation==="fastcash"){

            let cashAns=await inquirer.prompt(
                [
                    {
                        name:"cash",
                        message:"select your amount",
                        type:"list",
                        choices:["5000","10000","15000","20000","30000","40000","45000"]
                    }
                ]
            );
            myBalanace-=cashAns.cash;
            console.log((chalk.yellow.bold)("your remaining balance is: ")+ myBalanace);
        }
       
    }
       

        else{
            console.log ((chalk.red.bold)("incorrect pin code "));
        }
        
    


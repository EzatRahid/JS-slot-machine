// 1. deposit some money
// 2. determine #of lines to bet on
// 3. collect bet amount
// 4.spin
// 5.check if the user won

const prompt  = require('prompt-sync')();

const deposit = () =>{
    while(true){

        const depositAmount = prompt('Please enter an amount to deposit: $')
        const numberDepositAmount = parseFloat(depositAmount)
        console.log(`Your balance is $${numberDepositAmount}`)
        
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log(`Please enter a valid amount, try again: $`)
        }else{
            return numberDepositAmount
        }
    }
}

const depositAmount = deposit();

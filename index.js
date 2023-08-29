// 1. deposit some money
// 2. determine #of lines to bet on
// 3. collect bet amount
// 4.spin
// 5.check if the user won

const prompt = require('prompt-sync')()

const deposit = () =>{
    const depositAmount = prompt('Enter an amount of money you want to deposit: $')
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
        console.log("insufficient input. Please try again")
    }
}


deposit();
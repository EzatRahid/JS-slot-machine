// 1. deposit some money

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

let balance = deposit();

// 2. determine #of lines to bet on
const getLines = () =>{
    while(true){

        const lines = prompt('Enter number of lines you would like to bet on: ')
        const NumberOfLines = parseFloat(lines)
        
        if(isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3 ){
            console.log('invalid line amount, try again: ')
        }else{
            return NumberOfLines
        }
    }
}

const NumberOfLines = getLines();
// 3. collect bet amount
const getBet = (balance, lines) =>{
    const bet = prompt('Enter bet per line: $');
    const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
        console.log('invalid bet amount, try again: ')
    }else{
        return numberBet
    }
}

let bet = getBet(balance,NumberOfLines);

// 4.spin
// 5.check if the user won
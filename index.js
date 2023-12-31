// 1. deposit some money

const prompt  = require('prompt-sync')();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    'A':2,
    'B':4,
    'C':6,
    'D':8
}
const SYMBOLS_VALUES = {
    'A':5,
    'B':4,
    'C':3,
    'D':2 
}



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
    while(true){

        const bet = prompt('Enter bet per line: $');
        const numberBet = parseFloat(bet);
        
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log('invalid bet amount, try again: ')
        }else{
            return numberBet
        }
    }
}

let bet = getBet(balance,NumberOfLines);

// 4.spin

const spin = () =>{
    const symbols = []
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol)
        }
    }
   
    const reels = [[],[],[]]
   for(let i = 0;i < COLS; i++){
    const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
   }
   return reels;
}

const reels = spin();
console.log(reels)

// 5.check if the user won
const transpose = (reels) =>{
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([])
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const rows = transpose(reels);
console.log(reels)
console.log(rows)

const printRows = (rows) =>{
    for(const row of rows){
        let rowString = ''
        for(const [i,symbol] of rows.entries()){
            rowString += symbol
            if(i !=rows.length -1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}

printRows(rows);


// check if user won

const getWinnings = (rows,bet,lines) =>{
    let winnings = 0

    for(let row = 0; row < lines; row++){
        const symbols = rows[row]
        let allSame = true
    }
}
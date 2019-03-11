

const piggyBank = {
    quarters: "",
    dimes: "",
    nickels: "",
    pennies: ""
};

const coinArray = [.25, .10, .05, .01];

let numOfCoins = 0;

const cashToCoins = (dollarValue) => {
    let i = 0;
   
    for (let coin in piggyBank) {
        let remainder = dollarValue%coinArray[i];
        if (i === 3) {
            piggyBank[coin] = Math.round(dollarValue / coinArray[i]);
        } else if (remainder === 0) {
            piggyBank[coin] = dollarValue/coinArray[i];
        } else if (remainder > 0) {
            piggyBank[coin] = Math.floor(dollarValue/coinArray[i]);
            dollarValue = remainder;
        } 
        i++; 
    }
  
    return piggyBank;
}

console.log(cashToCoins(1.09));
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and 
cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
    var changeBack = cash - price;
    var change = cash - price;
    var cents = (((changeBack - Math.floor(changeBack).toFixed(2)) * 100));
    var changeArr = [];
   
    var hundred = parseInt(change / 100)
    changeArr.push(["ONE HUNDRED",(100 * hundred)])
    change = change % 100;

    var twenty = parseInt(change / 20)
    changeArr.push(["TWENTY",(20 * twenty)]);
    change = change % 20;

    var ten = parseInt(change / 10)
    changeArr.push(["TEN",(10 * ten)]);
    change = change % 10;

    var five = parseInt(change / 5)
    changeArr.push(["FIVE",(5 * five)]);
    change = change % 5;

    var one = parseInt(change / 1)
    changeArr.push(["ONE",(1 * one)]);
    change = change % 1;

    var quarters = Math.floor(cents / 25);
    changeArr.push(["QUARTER",(.25 * quarters)]);
    
    
    var dimes = Math.floor((cents % 25) / 10);
    changeArr.push(["DIME",(.10 * dimes)]);
    
   
    var nickels = Math.floor(((cents % 25) % 10) / 5);
    changeArr.push(["NICKEL",(.05 * nickels)]);
     
     var pennies = cents % 5;
    changeArr.push(["PENNY",(pennies)]);
    

    if(changeBack < 0){
      return console.log({"status":"INSUFFICIENT FUNDS","change":[]});
    }
    if(changeBack == 0){
     return console.log({"status":"CLOSED","change":cid});
    }
    else
    return console.log({"status":"OPEN","change":changeArr});

    
}
     
  checkCashRegister(1, 2.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
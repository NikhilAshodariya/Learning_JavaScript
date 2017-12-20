/**
 * Creating Piggy Bank using Closure
 */

function PiggyBank(v) {
  var balance = v;
  var lt = v;

  function deposit(v) {
    balance = balance + v;
    lt = v;
  }

  function withdraw(v) {
    if (balance >= v) {
      balance = balance - v;
      lt = -v;
    } else {
      console.log("sorry insufficient balance");
    }
  }

  function statement() {
    console.log(`balance = ${balance}`);
    console.log(`lt = ${lt}`);
  }
  return {
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
  };
}

var pg1 = PiggyBank(0);
var pg2 = PiggyBank(20);

pg1.statement();
pg2.statement();

pg1.deposit(100);
pg1.withdraw(50);
pg1.statement();

pg2.deposit(90);
pg2.withdraw(5);
pg2.statement();

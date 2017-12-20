function deposit(balance,lt,v) {
  balance = balance + v;
  lt = v;
  return [balance,lt];
}

function withdraw(balance,lt,v) {
  if (balance >= v) {
    balance = balance - v;
    lt = -v;
  } else {
    console.log("sorry insufficient balance");
  }
  return [balance,lt];
}

function statement(balance,lt) {
  console.log(`balance = ${balance}`);
  console.log(`lt = ${lt}`);
}
// withdraw.private.balance =300;


function PiggyBank(v) {
  var balance = v;
  var lt = v;

  this.deposit1 = function(v){
    [balance,lt] = deposit(balance,lt,v);
  }

  this.withdraw1 = function(v){
    [balance,lt] = withdraw(balance,lt,v);
  }

  this.statement1 = function(){
    statement(balance,lt);
  }
}

var pg1 = new PiggyBank();
pg1.deposit1(500);
pg1.statement1();

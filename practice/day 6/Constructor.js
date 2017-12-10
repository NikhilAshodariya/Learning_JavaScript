function deposit(v)
{
    this.balance = this.balance + v;
    this.lt = v;
}

function withdraw(v)
{
    if (this.balance >= v)
    {
        this.balance = this.balance - v;
        this.lt = -v;
    }
}

function statement()
{
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}

function deposit1(){console.log("in new deposit");}
function withdraw1(){console.log("in new withdraw");}
function statement1(){console.log("in new statement");}

var base= {
  deposit:deposit1,
  withdraw:withdraw1,
  statement:statement1
}

// Need to keep together to avoid confusion
function Piggybank(){
  this.balance = 0;
  this.lt = 0;
}
// Piggybank.prototype.deposit = deposit;
// Piggybank.prototype.withdraw = withdraw;
// Piggybank.prototype.statement = statement;

Piggybank.prototype = base;
// Need to keep together to avoid confusion




var pig1= new Piggybank();
console.log(pig1.constructor);
pig1.deposit(300);
console.log(pig1);
console.log(base.__proto__);
console.log(base.constructor);
console.log(pig1.__proto__);
console.log(pig1 instanceof  Piggybank);

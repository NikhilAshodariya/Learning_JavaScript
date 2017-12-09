var base = {
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
};
var pg1 = {
    balance: 0,
    lt: 0,
    __proto__: base
};

var pg2 = {
    balance: 0,
    lt: 0,
    __proto__: base
};

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


pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();


pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();

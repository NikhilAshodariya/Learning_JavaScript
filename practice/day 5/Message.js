var pg1 = {
    balance: 0,
    lt: 0,
    deposit : deposit1,
    withdraw : withdraw1,
    statement : statement1
};

var pg2 = {
    balance: 0,
    lt: 0,
    deposit : deposit2,
    withdraw : withdraw2,
    statement : statement2
};

function deposit1(v)
{
    pg1.balance = pg1.balance + v;
    pg1.lt = v;
}
function withdraw1(v)
{
    if (pg1.balance >= v)
    {
        pg1.balance = pg1.balance - v;
        pg1.lt = -v;
    }
}
function statement1()
{
    console.log("Balance = " + pg1.balance);
    console.log("Last Transction = " + pg1.lt);
}


function deposit2(v)
{
    pg2.balance = pg2.balance + v;
    pg2.lt = v;
}
function withdraw2(v)
{
    if (pg2.balance >= v)
    {
        pg2.balance = pg2.balance - v;
        pg2.lt = -v;
    }
}
function statement2()
{
    console.log("Balance = " + pg2.balance);
    console.log("Last Transction = " + pg2.lt);
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

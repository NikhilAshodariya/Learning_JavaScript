class PiggyBank{
 constructor(){
   if(PiggyBank.count === undefined) PiggyBank.count = 0;
   PiggyBank.count++;
   this.balance = 0;
   this.lt = 0;
 }

 deposit(v){
     if(v > 0){
       this.balance += v;
       this.lt = v;
     }
 }

 withdraw(v){
     if(v > 0 && v <= this.balance){
       this.balance -= v;
       this.lt = -v;
     }
 }

 statement(){
    console.log("Balance = " + this.balance);
    console.log("Last Transaction = " + this.lt);
 }

 static printObjectCount(){
   console.log("This is a Static Method");
   console.log("Object Count = " + PiggyBank.count);
 }

}

var pg1 = new PiggyBank();
var pg2 = new PiggyBank();
var pg3 = new PiggyBank();

PiggyBank.printObjectCount();

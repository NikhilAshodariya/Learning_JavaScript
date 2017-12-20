class C1{
 constructor(){
   this.a = 0;
   this.b = 0;
 }

 print(){
   console.log(this.a);
   console.log(this.b);
 }

 sing(){
   console.log("Welcome to the Hotel Califronia.....");
 }

}

class C2 extends C1{
 constructor(){
   super();
   this.c = 0;
   this.d = 0;
 }

 print(){
   super.print();
   console.log(this.c);
   console.log(this.d);
 }

 sing(){
   console.log("U Can't touch this.....");
 }
 // 
 // sing(g){
 //   console.log("U Can't touch this.....dfgdfgdfg"+g);
 // }

}

function Stage(obj)
{
  console.log("Entering Stage");
  console.log("Is the given Object Instance Of C1 => " + (obj instanceof C1));
  console.log("Is the given Object Instance Of C2 => " + (obj instanceof C2));
  obj.sing();
  console.log("Leaving Stage");
}

//C1
var obj1 = new C1();
obj1.print()
obj1.a = 10;
obj1.b = 20;
obj1.print();
obj1.sing();


//C2
var obj2 = new C2();
obj2.print()
obj2.a = 100;
obj2.b = 200;
obj2.c = 300;
obj2.d = 400;
obj2.print();
obj2.sing();

Stage(obj1);
Stage(obj2);

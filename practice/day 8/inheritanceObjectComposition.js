class C1{
 constructor(){
   this.a = 0;
   this.b = 0;
 }

 print(){
   console.log(this.a);
   console.log(this.b);
 }

}

class C2 extends C1{
 constructor(){
   super();
   this.c = 0;
   this.d = 0;
 }

 print(){
   // console.log(this.a);
   // console.log(this.b);
   super.print();
   console.log(this.c);
   console.log(this.d);
 }

}


//C1
var obj1 = new C1();
obj1.print()
obj1.a = 10;
obj1.b = 20;
obj1.print();


//C2
var obj2 = new C2();
obj2.print()
obj2.a = 100;
obj2.b = 200;
obj2.c = 300;
obj2.d = 400;
obj2.print();

var obj1={
  a:1,
  b:2
};

var obj2 ={
  c:3,
  d:4
};

obj2.__proto__ = obj1;
console.log("object 1 a = "+obj1.a);
console.log("object 1 b = "+obj1.b);
console.log("object 2 c = "+obj2.c);
console.log("object 2 d = "+obj2.d);
console.log("object 2 a = "+obj2.a);
console.log("object 2 b = "+obj2.b);
console.log("-------------------------------------");
obj2.a=99;
console.log("object 1 a = "+obj1.a);
console.log("object 1 b = "+obj1.b);
console.log("object 2 c = "+obj2.c);
console.log("object 2 d = "+obj2.d);
console.log("object 2 a = "+obj2.a);
console.log("object 2 b = "+obj2.b);

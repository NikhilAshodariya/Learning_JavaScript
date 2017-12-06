var obj1 = {
  a:1,
  b:2,
  c:3
};

console.log(obj1);
console.log(typeof(obj1));

obj1.d = 4;
obj1.a = true;
obj1.b = "cat";
obj1.c = 3;
console.log(obj1);
console.log(typeof(obj1));
console.log(obj1["a"]);


var obj2 = {
  1:10,
  2:20,
  3:30
};

console.log(obj2);
console.log(obj2[1]);
console.log(obj2["2"]);

for(var v in obj2){
  console.log(obj2[v]);
}

// for(var v of obj2){
//   console.log(v);
// }

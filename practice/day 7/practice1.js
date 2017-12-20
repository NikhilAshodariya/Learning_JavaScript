function f1(v){
  var cp = counter;
  console.log("Entering Round ================ "+cp);
  console.log("Entering f1");
  var a = 1;
  var b =2;
  var c =3;
  // console.log(`a = ${a}`);
  // console.log(`b = ${b}`);
  // console.log(`c = ${c}`);
  // console.log(`v1 = ${v}`);

  function f2(v2){
    console.log("Entering f2");
    var d =4;
    v++;
    a++;
    b++;
    c++;
    console.log(`d = ${d}`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`v2 = ${v2}`);
    console.log(`v = ${v}`);
    console.log("leaving f2");
  }
  f2(40);

  // function f3()

  // f2(50);
  // f2(60);
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  // console.log(`v1 = ${v}`);
  // f = f2;
  pointer[counter] = f2;
  counter++;
  console.log("leaving f1");
  console.log("Leaving Round ================ "+cp);
}

var pointer = [null,null];
var counter = 0;
f1(10);
f1(10);
var p1 = pointer[0](60);
var p2 = pointer[1](80);
// f(8);
// console.log(f);
// f1(20);1
// f1(30);

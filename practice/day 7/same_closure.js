function f1(v){
  var cp = counter;
  console.log("Entering Round ================ "+cp);
  console.log("Entering f1");
  var a = 1;
  var b =2;
  var c =3;

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

  function f3(v3){
    console.log("Entering f3");
    var e =4;
    v++;
    a++;
    b++;
    c++;
    console.log(`e = ${e}`);
    console.log(`f3 a = ${a}`);
    console.log(`f3 b = ${b}`);
    console.log(`f3 c = ${c}`);
    // console.log(`f3 v2 = ${v2}`);
    console.log(`f3 v = ${v}`);
    console.log("leaving f3");
  }

  pointer1[counter] = f2;
  pointer2[counter] = f3;
  counter++;
  console.log("leaving f1");
  console.log("Leaving Round ================ "+cp);
}

var pointer1 = [null,null];
var pointer2 = [null,null];
var counter = 0;

f1(10);
f1(20);
pointer1[0](30);
pointer2[1](60);

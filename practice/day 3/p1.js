var a = [10,20,30,40];
var b = [22,33,44,55];

/**
  * if we use in like (for(var v in a )) then v refers to index and not value
  * so in refers to index
  *
  */

// for(var v in a ){
//   console.log(a[v]*2);
// }

/**
  * if we use of like (for(var v of a )) then v refers to value and not index
  * so of refers to value
  *
  */

// for(var v of a ){
//   console.log(v*2);
// }


// for(let k of a){
//   console.log(k);
// }
//
// for(let j of b){
//   console.log(j);
// }


var c = b
for(let k in c){
  c[k] = c[k] + c[k];
}

console.log("------------printing b---------------");
for(let k of b){
  console.log(k);
}

console.log("------------printing c---------------");
for(let k of c){
  console.log(k);
}

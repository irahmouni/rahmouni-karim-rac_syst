
'use strict'


/* exercice 1.1 */

function min(a,b) {
  return a;
}

let max = (a,b) => {
    return a;
}

//console.log( min(3, 4));


'use strict'

function min(a,b) {
  return (a<b) ? a : b;
}

function max(a,b){
    return (a>b) ? a : b;
}

function power(x, n){
  if (n == 0){
    return 1;
  }else{
    return x = x* power(x,n-1);
  }
}

for (let i = 0; i < 100; i++) {
  console.log(i)
  if(i% 5 == 0){
    console.log("yooo");
  }
  if(i == 73){
    console.log("Biinngooo");
  }
}

console.log("Min entre 224 et 42 : " + min(224,42));
console.log("Max entre 0.1 et 0.009 : " + max(0.1,0.009));
console.log("10 Puissance 2 : " + power(10,2));
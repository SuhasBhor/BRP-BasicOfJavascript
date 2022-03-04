var set = new Set([1,1,2,3,3,4]);
console.log(set);

set.add(5);
console.log(set);

set.delete(3);
console.log(set);

var set1 = new Set("suuuuhhhhaaasssss");
set1.delete('s');
console.log(set1);

console.log(set.has(3));

var set2 = new Set();
set2.add(22);
set2.add(11);
set2.add(33);
set2.add(44);
var getValues = set2.values();
console.log(getValues);
let a = Array.from(getValues).sort((a,b)=>a-b);
console.log(a);


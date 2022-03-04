const arr = [1,2,3,4,6];
arr.splice(4,1,5);
console.log(arr);

let arr1=arr.slice(0,2);
console.log(arr1);

arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);

const arr2 = [1,2,3,[4,5,6]];
let arr3 = arr2[3]; 
console.log(arr2[3][2]);



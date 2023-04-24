
let str1 = "abcadeecfb";
let newString = new Set(str1);
let res = '';
for(let value of newString){
  res = res + value;
}
console.log(res);


var str2 = "abcadeecfb";
const myMap = new Map();
for (var alphabet of str2) {
  if (myMap.has(alphabet)) {
    myMap.set(alphabet, myMap.get(alphabet) + 1);
  } else {
    myMap.set(alphabet, 1);
  }
}
console.log(myMap);

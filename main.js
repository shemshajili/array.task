//#region Sort
let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
numbers.sort(function(a,b){return a-b;})
console.log(numbers);
//#endregion
//#region Remove
function removeSelectedValues(array){
  let newArray=[];
for (let index = 0; index < array.length; index++) {
 if (typeof array[index] === 'number' && !isNaN(array[index]) ) {
  newArray.push(array[index]);
 }
}
return newArray;
}
var result = removeSelectedValues([1,false,5,1,NaN,9,10,undefined,12,"",null]);
console.log(result);
//#endregion
//#region Union
function union(arr1,arr2) {
  let mergedArr=arr1.concat(arr2)
  let newArr=[...new Set(mergedArr)]

  return newArr;
}
console.log(union([1, 2, 3], [10, 2, 1, 100])); 
//#endregion
//#region Sort.Title
function sortTitle(library) {
  return library.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}

let library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
];

console.log(sortTitle(library));
//#endregion
//#region Chain
function Chain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false;
    }
  }
  return true;
}
//#endregion
//———————————————————————————————— 1) sum array elements ————————————————————————————————
const sumArr = (arr) =>
  arr.reduce((accumulator, current) => accumulator + current, 0);

console.log(sumArr([10, 20, 30])); //60

//———————————————————————————————— 2) check if 2 arrays are equal ————————————————————————————————
const isArrEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, indx) => item === arr2[indx])
  );
};

console.log(isArrEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isArrEqual([1, 3, 4], [1, 2, 3])); // false

//———————————————————————————————— 3) accept any num of parameters ————————————————————————————————
const multiplyNumbers = (...args) =>
  args.reduce((accumulator, current) => accumulator * current, 1);

console.log(multiplyNumbers(1, 2, 3)); //6

//———————————————————————————————— 4) add Num to arr elements ————————————————————————————————
const addNumToArrElem = (arr, num) => arr.map((elem) => elem + num);

console.log(addNumToArrElem([2, 4, 6], 2)); // [4,6,8]

//———————————————————————————————— 5) remove duplicates from arr ————————————————————————————————
const removeDuplicates = (arr) => Array.from(new Set(arr));

console.log(removeDuplicates([10, 10, 20, 50])); //[10, 20, 50]

//———————————————————————————————— 6) merge 2 obj ————————————————————————————————
const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObj({ name: "Eman" }, { address: "Cairo" })); //{name:"Eman", address:"Cairo"}

//———————————————————————————————— 7) display welcome msg ————————————————————————————————
const displayWelcomeMsg = ({ username, age }) =>
  console.log(`Welcome ${username} with age ${age}`);

const user = {
  username: "omar",
  age: 20,
  address: "Alex",
};
displayWelcomeMsg(user); //Welcome omar with age 20

//———————————————————————————————— 8) check if string is palindrom ————————————————————————————————
const isPalindrome = (str) => str === str.split("").reverse().join("");

console.log(isPalindrome("car")); //false
console.log(isPalindrome("noon")); //true

//———————————————————————————————— 9) search in array ————————————————————————————————
const isTermInArr = (arr, term) => arr.includes(term);
// const isTermInArr = (arr, term) => arr.indexOf(term) !== -1;

console.log(isTermInArr(["apple", "orange"], "apple")); //true

//——————————————————————————— 10) get elements greater than num —————————————————————————
const getArrItems = (arr, num) => arr.filter((item) => item > num);

console.log(getArrItems([10, 2, 3, 15], 5)); //[10,15]

//———————————————————————————————— 11) split arr into chunks ————————————————————————————————
const splitArrToChunks = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

console.log(splitArrToChunks([5, 10, 1, 13, 2, 30, 18], 3)); //[[5,10,1],[13,2,30], [18]

//———————————————————————————————— 12) find num of occurance ————————————————————————————————
const getNumOfOccurance = (arr) => {
  //?------------solution 1
  // const count = {};

  // for (let i = 0; i < arr.length; i++) {
  //   count[arr[i]] = (count[arr[i]] || 0) + 1;
  // }

  // return count;

  //?------------solution 2
  return arr.reduce(
    (accumulator, current) => ({
      ...accumulator,
      [current]: (accumulator[current] || 0) + 1,
    }),
    {}
  );
};

//ali:3, omar:1, mona:2, eman:1
console.log(
  getNumOfOccurance(["omar", "ali", "ali", "eman", "mona", "ali", "mona"])
);

//———————————————————————————————— 13) get max in arr ————————————————————————————————
const getMax = (arr) => {
  // ? -------- solution 1
  // let max = arr[0];

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > max) max = arr[i];
  // }

  // return max;

  // ? -------- solution 2
  return Math.max(...arr);
};

console.log(getMax([50, 5, 150, 30])); //150

//———————————————————————————————— 14) sort array ascendingly ————————————————————————————————
const sortArr = (arr) => {
  // ? -------- solution 1
  // const arrClone = arr.slice();
  // let swapped = false;

  // for (let i = 0; i < arrClone.length - 1; i++) {
  //   for (let j = 0; j < arrClone.length - i - 1; j++) {
  //     console.log(arrClone[j], arrClone[j + 1]);

  //     if (arrClone[j] > arrClone[j + 1]) {
  //       [arrClone[j + 1], arrClone[j]] = [arrClone[j], arrClone[j + 1]];
  //       swapped = true;
  //     }
  //   }

  //   if (!swapped) break;
  // }

  // return arrClone;

  // ? -------- solution 2
  return arr.sort((a, b) => a - b);
};

console.log(sortArr([50, 10, 5, 30])); //[5,10,30,50]

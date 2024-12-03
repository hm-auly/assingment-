

//1. a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32; //celsius কে 9/5 দিযে গুণ করার কারনে  তাপমাত্রা পাওয়া গেছে তার পর  গুন ফল এর সাথে ৩৫ + করছি তার পরে out put পাওয়া গেছে
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77









//2.Write a function to check if a number is even. The function should take a single

function isEven(num) {
  return num % 2 === 0;// % অপারেটরটি দুটি সংখ্যার ভাগশেষ বার করে। 
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false




//3.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
  return a + b; //এই হানে Function এর ( a,b ) টাকে return করেছি 
 }

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30




 //5.a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
  return Math.min(...arr); //Math.min একটি বিলট ইন js ফাংশন, যা একাধিক সংখ্যার মধ্যে সবচেয়ে চোট সংখ্যা বর করা।
}

console.log(findSmallestNum([3, 5, 1, 9])); 
console.log(findSmallestNum([-1, -5, 0, 10]));



//6.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search


function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return ...; //এই জিনিস টা আমি বুঝতে পারি নি সেজন্য এটা এভাবেই রেখে দিয়েছি। 
}
console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3





//7.Write a function to get the first element of an array. The function should take a single argument, which is the array.


function getFirstElement(arr) {
  return arr[0]; //জাভাস্ক্রিপ্টে অ্যারের ইনডেক্স ০ থেকে শুরু হয় সজন্য arr[0] অ্যারের প্রথম উপাদানটিকে রিটার্ন কর সেজন্য getFirstElement([1, 2, 3]): এখানে 1 হলো প্রথম সংখ্যা যার কারনে ১ output করছে এখনে যদি ৫০ তাকতো তাহলে তাই out put করতো।
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"



//8.Write a function to check if an array is empty. The function should take a single argument, which is the array.


function isArrayEmpty(arr) {
  return arr.length === 0;// arr.length === 0: ব্যবহার করার কারনে যদি অ্যারের দৈর্ঘ্য শূন্য হয়, ফাংশনটি true রিটার্ন করবে
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false



//9.Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
  return ...; //এটাও বুঝতে পরি নি
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"





//10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.


function toLowerCase(str) {
  return str.toLowerCase(); // এখানে toLowerCase() মেতড এর মাধ্যমে স্ট্রিংয়ের সব অক্ষরকে ছোট হাতের অক্ষরে পরিবর্তন করেছি।
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"


//11.Write a function to find the length of a string. The function should take a single argument, which is the string.


function stringLength(str) {
  return str.length;// str.length: এটার মাধ্যমে একটা String এর মধ্যে একটা text আছে সেইটা গণনা করা যায়, যেমন নিছে hello এখনে ৫ টা সংখ্যা আছে সেজন্য output 5 করবে।
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5


//12. a function to merge two arrays. The function should take two arguments, which are the arrays to merge.


function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);//concat() মেথড দুটি ষ্অ্যারেকে (merge) করার জন্য ব্যবহার করা হয়। এটি মূল অ্যারেগুলিকে পরিবর্তন করে না একটি নতুন অ্যারে রিটার্ন করে। যেমন output এ সব একসাথে out put করেছে
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]



//13.Write a function to get the last element of an array. The function should take a single argument, which is the array.


function getLastElement(arr) {
  return arr[arr.length - 1];// arr.length একটি অ্যারের  মধ্যে কয়টা সংখ্যা আছে, যেহেতু অ্যারের ইনডেক্স 0 থেকে শুরু হয়, তাই অ্যারের শেষ সংখ্যা পাওয়া যায় arr.length - 1 এভাবে। 
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"



//14.Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
  return str.charAt(0);// .charAt(0) এই মেতড use করার জন্য hello এর প্রথম word h কে output করবে।
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"





//15.Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arrr) {
  return arr.reduce((sum, current) => sum + current, 0)//এখানে, sum হচ্ছে যোগফল রাকার variable sum + current প্রতিটি এলিমেন (current) বের করে যোগ করে। 

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])) // 7.5

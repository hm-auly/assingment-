// 1. Create a variable called carName, assign the value Volvo to it.

 let carName= "Volvo"; // এখানে carName হলো Variable এর নাম,, আর Volvo হলো তার Value
 console.log(carName);
 // output আসবে volvo





// 2. So What Will Be The 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both!
 
 let firstName = "John"; // firstName হলো Variable এর নাম
 let lastName = "Doe"; // Doe হলো lastNeme এর value
 let age = 35;  //এখানে Variable এর নাম হলো age আর 35 তার value






// 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).
 x = 10;
 y = 5;
 x *= y;  
 console.log(x); // Multiplication Assignment ব্যবহার করার কারনে x * y  করলে output 50 আসে কারন 10×5 = 50 আসে









// 4.Use comments to describe the correct data type of the following variables:

 let length = 16; 
 console.log(typeof length) //length veritable এর data type  হলো  Number Data type,,  কারন Console.log(type of) করার data type বের হয়ে আসছে


let lastName = "Johnson";
console.log(typeof lastName) // lastName veritable এর data type  হলো  String Data type,,  কারন Console.log(type of) করার পর data type বের হয়ে আসছে


const x = {
  firstName: "John",
  lastName: "Doe",  
};  
console.log(typeof x)  // x veritable এর data type  হলো  object Data type,,  কারন Console.log(type of) করার পর data type বের হয়ে আসছে





//5.Execute the function named myFunction.

 function myFunction() {
  alert("Hello World!");
}
myFunction() //Function  এর নাম এর পর  ( )  এই  চিন্হ টা লেখার মাধ্যমে Function কে Call করা হয়েছে  এটা যে নিছেই করতে হবে তা না, এটাকে Call করার আরো সিস্টেম আছে।






//6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

let person = { // একটা object তৈরি করেছি তার নাম person নামে।
    name: "John",// তার নাম দিয়েছি John নামে
    age: 50        // Age দিয়েছি 50
  };
  
  alert(person.name + " is " + person.age);  // person.name কে ধরে তার পর + দিয়ে " Is " দেয়ার পর আরেকটা + দিয়ে  persone.age কে ধরেছি তার পর output "John is 50" আসে
  
   




// 7. The <button> element should do something when someone clicks on it. Try to fix it!

  <button onclick"alert"Button is clicket""> Click me </button> // এখানে Button এর মধ্যে onclick ব্যবহার করার পর  একটা alert  এর মাধ্যমে মেসেজ টা সো করা হয়েছে







  //8. Array Related Question 

const Brand = ["Volvo", "Jeep", "Mercedes"];

Brand[0] = "Ford"; // Array এর FIRST লেখা কে পরিবর্তন করার জন্য  এর নাম লেখার পর কোন নাম্বার VALUE কে পরিবর্তন করার জন্য [0]  ব্যবহার করেছি কারন Javascript এ প্রথম সংখ্যা কে 0 দিয়ে গননা করা হয়  তার পর " Ford " লিখে দিয়েছি তার পর out put Change হয়ে যাবে

console.log(Brand); // এখন Array পরিবর্তন হয়ে যাবে: ["Ford", "Jeep", "Mercedes"]







// 9.Math Related Problems

let randomNumber = Math.random(); //প্রথম এ Random নামক একটা Veritable তৈরি করেছি তার পর Math.random( ) মেতড use করার কারনে এখন একটা Rendom নাম্বার output করবে।
console.log(randomNumber); 






//10 comparison operator related problems!

let x = 10;
let y = 5;

alert(x > y);  ////Output true  কারন X বড় y ছোট





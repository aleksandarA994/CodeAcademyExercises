// function numberOddEven (){
//     for (var i=0; i<=15; i++ ){
//         if (i===0){
//         console.log(i , "even");
//     }else if (i % 2 === 0){
//         console.log(i ,"even");
      
//     }else {
//         console.log(i , "odd");
//     }
// }

// }

// numberOddEven();

// function iterateIntegers(){
//     for (var i=1; i<=100; i++){
//         if (i%5===0 && i%3===0){
//             console.log (i , "FizzBuzz")
//         }else if (i%3===0){
//             console.log(i , "Fizz");
//         } else if (i%5===0){
//             console.log(i , "Buzz")
//         } else {
//             console.log(i);
//         }
//     }
// }

// iterateIntegers();

// function armstrong() {
//     for (var i=100; i<1000; i++) {
//         var result = sumOfCubes(i);
 
//         if (result === i) {
//             console.log (i + " is an armstrong number");
//         }
 
//     }
//  }
 
//  function sumOfCubes (number) {
//     var sum = 0;
 
//     while (number) { 
//         var cifra = number % 10;
//         sum += Math.pow(cifra, 3);
//         number = Math.floor (number / 10);
 
//     }
 
//     return sum;
//  }
 
// armstrong();

// function sumOfNumbers2 (){
//     var sum = 0;
//     for (var i=0; i<=1000; i++){
//         if (i%3===0 && i%5===0){
//             sum+=i;
//         }
//     }
//     console.log(sum)
    
// }

// sumOfNumbers2();


// function sumRange (x, y){
//     var sum=0;
//     for(var i=x; i<=y; i++){
//         sum+=i;

//     }
//     console.log(sum.toString());
// }

// function primeNumbers (min, max){
//     var sum=0;
//     for (i=min; i<=max; i++){
        

//         if(!isPrime()){
//             sum+=i;
            
//         } else {
//             console.log("you run into a problem", i)
//         }

//     }

// }

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0)
//        return false;
//     return num > 1;
//   }

//nizi pocnuvaat od nulta index

// var testArray = ["vladimir", 56, true, null, [5,6,7], false, {}];

// for (var index = 0; index < testArray.length; index++) {
//     var element = testArray[index];
//     console.log(element);
    
// }

// function feedTheCats(){
// var cats = ["Tabby", "Lizzie", "Mary"];
// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// for (var i=0; i<days.length; i++ ){
//     var day = days[i];
//     for (var j=0; j<cats.length; j++){
//         var cat = cats[j];
        
//         if (cat==="Tabby"){
//             console.log("Fish for Tabby on" + day)
//         } else if (cat==="Lizzie"){
//             console.log("Chicken for Lizzy on" + day)
//         } else {
//             console.log("Mary is full on" + day)
//         }


//     }

  


        
// }
// }

// feedTheCats();

// function performCPR (){
//     var time = 60;
//     for (var i=0; i<time; i++){
//         if (i % 15 === 0){
//             console.log("checking puls");
//         } else {
//             console.log("performing CPR");
//         }
        
//         if (i === time - 1){
//             console.log ("The patient died");
//         }
//     }
    
// }

// performCPR();


// function isPalindrome (number){
//     var sum=0;
//     var temp=number;
    
//     while (temp) {
//       var cifra = number % 10;
//       sum = sum * 10 + cifra;
//       temp = Math.floor(number/ 10);
//     }

//     if (number === sum){
//         console.log("Yes it is");

//     } else {
//         console.log ("No it's not");
//     }


     
// }

// isPalindrome(252);

//parseInt - pretvora broj vo string!!!!

// function girlImpressing (){
//     var girlPoints = 0;
//     for (var i = 1; i<=25; i++){
        
            
//          if (i%10===0){
//             girlPoints+=i-12;
//         } else if (i%5===0){
//             girlPoints+=i+10;
//         } else if (i%3===0){
//             girlPoints+=i+5;
//         } else {
//             girlPoints++;
//         }
        
//     }
//     console.log(girlPoints);
// }

// girlImpressing();


// function orkVsHuman (){
//     var humanFootman = 0;
//     for (var i = 1; i<=100; i++){
//        var hits = Math.floor(Math.random() * 27) + 18;  

//        humanFootman += hits - 5;

       
//     }
//     if (humanFootman>720){
//         console.log("The humanfootman wins.")
//     } else{
//         console.log ("The ork wins.")
//     }
// }

// orkVsHuman();




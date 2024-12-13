// Q-1, Calculate difference

function calculateDifference(a,b){
    return a - b;
 }
 const result = calculateDifference(10, 5);
 console.log(result);

 //Q-2, Check odd/even number

 function isOdd(n){
    return n % 2 !== 0;
 }
 console.log(isOdd(3));
 console.log(isOdd(6));

 //Q-3, Find the minimum number

 const arr = [4, 5, 6, 1, 10];
 function findMin(numbers){
    const min = Math.min(...numbers);
    return numbers.find(num => num === min);
 }

 console.log(findMin(arr));

 // Q-4, Filter even number from an array

 const Array = [1,2,3,4,5,6,7,8];

 function filterEvenNumbers(numbers){
    return numbers.filter(function( num){
        return num % 2 === 0;
    });
 }
 console.log(filterEvenNumbers(Array));

 // Q-5, Sort array as descending order

 const arr5 = [8,7,10,3,6,11,1];

 function sortArrayDescending(numbers){
    return numbers.sort(function(a,b){
        return b - a;
    });
 }

 console.log(sortArrayDescending(arr5));

 // Q-6, Lowercase the first letter of a string

 function lowercaseFirstLetter(str){
     if(str.length == 0){
        return str;
     }
      return str.charAt(0).toLowerCase() + str.slice(1);   
 }
 console.log(lowercaseFirstLetter("Nazmul"));

 // Q-7, find average

 function findAverage(numbers){
    const sum = numbers.reduce(function(res, num){
        return res + num ;
    }, 0);
    return sum / numbers.length;
 }
 const avgarr = [15,12,30,40];
 console.log(findAverage(avgarr));

 // Q-8, Check leap year

 function isLeapyear(year){
    const res = (year % 4 === 0 && (year % 100 !== 0 || year % 400===0));
    return res;
 }
console.log(isLeapyear(2020));
console.log(isLeapyear(2023));